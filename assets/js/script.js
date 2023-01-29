// TODAY WEATHER
function today(obj) {
  // Clean the section before add new elements to avoid add more then 1 card
  $("#today").empty();
  var todayBox = $("#today");
  var todayCard = $("<div>");
  todayCard.attr("class", "card");
  todayBox.append(todayCard);

  var cardBody = $('<div class="card-body">');
  todayCard.append(cardBody);

  var cardTitle = $('<h5 class="card-title">');
  cardTitle.text(`${obj.city} (${obj.today.date})`);
  cardTitle.append(`<img src=${obj.today.icon} alt="${obj.today.desc}">`);
  cardBody.append(cardTitle);

  var tempText = $('<p class="card-text">');
  tempText.text(`Temp: ${obj.today.temp}ºC`);
  cardBody.append(tempText);

  var windText = $('<p class="card-text">');
  windText.text(`Wind: ${obj.today.wind}KPH`);
  cardBody.append(windText);

  var humidityText = $('<p class="card-text">');
  humidityText.text(`Humidity: ${obj.today.humidity}%`);
  cardBody.append(humidityText);
}

var cityList = [];
var history = [];

/*
 *The storage function, pull the localStorage,
 *convert from JSON to Object and push to cityList array,
 *The last step is clear the localStorage to not duplicate,
 *when send the array back to localStorage
 */
function storage() {
  if (localStorage.listOfCities) {
    var storage = JSON.parse(localStorage.getItem("listOfCities"));
    // var cleanList = Array.from(new Set(storage))
    for (var i = 0; i < storage.length; i++) {
      cityList.push(storage[i]);
    }
    localStorage.clear();
  }
}

function storeCities(arr) {
  localStorage.setItem("listOfCities", JSON.stringify(arr));
}

function getData(city) {
  var key = "a1668648ccfd8acfcd0c4f5c7ac64f5f";
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (resp) {
    var list = resp.list;
    console.log(list);

    // Get first element of the string before space
    function getDate(str) {
      var dateStr = str.substring(0, str.indexOf(" "));
      return dateStr.split("-").reverse().join("/");
    }

    var index = 0;

    function five(array) {
      // Clean the section before add new elements to avoid add more then 1 card
      $("#forecast").empty();

      var forecastBox = $("#forecast");
      forecastBox.append($('<h4 class="px-3 w-100">5-Days Forecast: </h4>'));
      var cardDeck = $("<div>");
      cardDeck.attr("class", "card-deck px-3 w-100");
      forecastBox.append(cardDeck);

      var date = getDate(array[index].dt_txt);
      for (var i = 0; i < array.length; i++) {
        // Condition to get only one element per day
        if (getDate(array[i].dt_txt) !== date) {
          var foreCard = $('<div class="card mb-3 bg-dark text-white">');
          cardDeck.append(foreCard);

          var dateCardBody = $('<div class="card-body">');
          foreCard.append(dateCardBody);

          var foreCardTitle = $('<h6 class="card-title p-1">');
          dateCardBody.append(foreCardTitle);
          foreCardTitle.text(`${getDate(array[i].dt_txt)}`);
          var icon = `https://openweathermap.org/img/wn/${array[i].weather[0].icon}.png`;

          var image = $(`<img src=${icon}>`);
          dateCardBody.append(image);

          var tempText = $('<p class="card-text">');
          tempText.text(`Temp: ${(array[i].main.temp - 273.15).toFixed(2)}ºC`);
          dateCardBody.append(tempText);

          var windText = $('<p class="card-text">');
          windText.text(`Wind: ${array[i].wind.speed}KPH`);
          dateCardBody.append(windText);

          var humidityText = $('<p class="card-text">');
          humidityText.text(`Humidity: ${array[i].main.humidity}%`);
          dateCardBody.append(humidityText);
        }
        date = getDate(array[i].dt_txt);
      }
    }

    five(list);

    console.log(resp);
    var data = {
      city: resp.city.name,
      today: {
        date: getDate(resp.list[0].dt_txt),
        temp: (resp.list[0].main.temp - 273.15).toFixed(2),
        wind: resp.list[0].wind.speed,
        humidity: resp.list[0].main.humidity,
        desc: resp.list[0].weather[0].description,
        icon: `https://openweathermap.org/img/wn/${resp.list[0].weather[0].icon}.png`,
      },
    };
    console.log(`Get DATA TYPE: ${data.today.date}`);
    today(data);

    cityList.push(data.city);

    console.log(cityList, list);

    storage();
    /*
     * Set: A value in the Set may only occur once; it is unique in the Set's collection
     * Array.from: method creates a new array from an array-like structure
     */
    var cleanList = Array.from(new Set(cityList));
    storeCities(cleanList);
  });
}

var srcBtn = $("#search-button");
var srcInp = $("#search-input");

srcBtn.on("click", function (e) {
  e.preventDefault();

  console.log(srcInp.val());

  var cityBySearch = srcInp.val();

  getData(cityBySearch);

  createHistory(history);
  reload();
});

function reload() {
  var store = JSON.parse(localStorage.getItem("listOfCities"));
  var list = $("li");
  console.log(store);
  if (list.length !== store.length) {
    location.reload();
  }
}

function createHistory(arr) {
  $("#history").empty();
  arr = [];
  var historyItem = $("<li>");
  historyItem.addClass("btn btn-secondary");
  var historyList = $("#history");
  var cityList = $("<ul>");
  cityList.attr("class", "list-group");
  historyList.append(cityList);

  if (localStorage.listOfCities) {
    var stor = JSON.parse(localStorage.getItem("listOfCities"));

    for (var i = 0; i < stor.length; i++) {
      arr.push(stor[i]);
      cityList.append(
        `<li id=${i} class="hist btn btn-secondary">${stor[i]}</li>`
      );
    }
  }
  $(".hist").on("click", function () {
    var btnCity = $(this).text();
    getData(btnCity);
    console.log($(this).text());
    reload();
  });
}

createHistory(history);
