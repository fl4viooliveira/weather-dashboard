var historyList = $("#history");
var cityList = $("<ul>");
cityList.attr("class", "list-group");

// SIDE BAR
var historyItem1 = $("<li>");
var historyItem2 = $("<li>");
var historyItem3 = $("<li>");
var historyItem4 = $("<li>");
var historyItem5 = $("<li>");
var historyItem6 = $("<li>");

historyItem1.addClass("btn btn-secondary btn-block");
historyItem2.addClass("btn btn-secondary");
historyItem3.addClass("btn btn-secondary");
historyItem4.addClass("btn btn-secondary");
historyItem5.addClass("btn btn-secondary");
historyItem6.addClass("btn btn-secondary");

historyList.append(cityList);
cityList.append(historyItem1);
historyList.append(cityList);
cityList.append(historyItem2);
historyList.append(cityList);
cityList.append(historyItem3);
historyList.append(cityList);
cityList.append(historyItem4);
historyList.append(cityList);
cityList.append(historyItem5);
historyList.append(cityList);
cityList.append(historyItem6);

historyItem1.text("Test 11111");
historyItem2.text("Test 22222");
historyItem3.text("Test 33333");
historyItem4.text("Test 44444");
historyItem5.text("Test 55555");
historyItem6.text("Test 66666");

// TODAY WEATHER
var todayBox = $("#today");
console.log(todayBox);

var todayCard = $("<div>");
todayCard.attr("class", "card");

todayBox.append(todayCard);

var cardBody = $('<div class="card-body">');
todayCard.append(cardBody);

var cardTitle = $('<h5 class="card-title">');
var city = "London";
var date = "27/01/2023";
var icon = "ml-3 fa-regular fa-sun";

cardTitle.text(`${city} (${date})`);

cardTitle.append(`<i class="${icon}">`);
cardBody.append(cardTitle);

var tempText = $('<p class="card-text">');
var temp = "13.63";
tempText.text(`Temp: ${temp}ºC`);

var windText = $('<p class="card-text">');
var wind = "1.7";
windText.text(`Wind: ${wind}KPH`);

var humidityText = $('<p class="card-text">');
var humidity = "1.7";
humidityText.text(`Humidity: ${humidity}%`);

cardBody.append(tempText);
cardBody.append(windText);
cardBody.append(humidityText);

// 5 DAY FORECAST
var forecastBox = $("#forecast");

var cardDeck = $("<div>");
cardDeck.attr("class", "card-deck px-3");
forecastBox.append(cardDeck);

var foreCard = $('<div class="card">');
cardDeck.append(foreCard);

var dateCardBody = $('<div class="card-body">');
foreCard.append(dateCardBody);

var foreCardTitle = $('<h5 class="card-title">');
dateCardBody.append(foreCardTitle);

foreCardTitle.text(`${city} (${date})`);

console.log(forecastBox);

var foreCard = $('<div class="card">');
cardDeck.append(foreCard);

var dateCardBody = $('<div class="card-body">');
foreCard.append(dateCardBody);

var foreCardTitle = $('<h5 class="card-title">');
dateCardBody.append(foreCardTitle);

foreCardTitle.text(`${city} (${date})`);

var foreCard = $('<div class="card">');
cardDeck.append(foreCard);

var dateCardBody = $('<div class="card-body">');
foreCard.append(dateCardBody);

var foreCardTitle = $('<h5 class="card-title">');
dateCardBody.append(foreCardTitle);

foreCardTitle.text(`${city} (${date})`);

var foreCard = $('<div class="card">');
cardDeck.append(foreCard);

var dateCardBody = $('<div class="card-body">');
foreCard.append(dateCardBody);

var foreCardTitle = $('<h5 class="card-title">');
dateCardBody.append(foreCardTitle);

foreCardTitle.text(`${city} (${date})`);

var foreCard = $('<div class="card">');
cardDeck.append(foreCard);

var dateCardBody = $('<div class="card-body">');
foreCard.append(dateCardBody);

var foreCardTitle = $('<h5 class="card-title">');
dateCardBody.append(foreCardTitle);

foreCardTitle.text(`${city} (${date})`);


function getData(city) {
  var key = "a1668648ccfd8acfcd0c4f5c7ac64f5f";
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (resp) {


    var list = resp.list;

    // Get first element of the string before space
    function getDate(str) {
      var dateStr = str.substring(0, str.indexOf(" "));
      return dateStr;
    }

    // Average function
    function average(arr) {
      var result =
        arr.reduce(function (a, b) {
          return a + b;
        }) / arr.length;
      return result;
    }
    const arrTemp = [];
    const arrWind = [];
    const arrHumidity = [];

    var dataArray = [];

    var index = 0;

    function five(array) {
      var date = getDate(array[index].dt_txt);

      for (var i = 0; i < array.length; i++) {
        if (getDate(array[i].dt_txt) !== date) {
          dataArray.push({
            date: array[i].dt_txt, // TODO: Convert date
            temp: array[i].main.temp,
            wind: array[i].wind.speed,
            humidity: array[i].main.humidity,
            icon: `https://openweathermap.org/img/wn/${array[i].weather[0].icon}.png`,
          });
        }
        date = getDate(array[i].dt_txt);
      }
    }

    five(list);
    console.log(dataArray);

    console.log(resp);
    var data = {
      city: resp.city.name,
      today: {
        date: resp.list[0].dt_txt, // TODO: Convert date
        temp: resp.list[0].main.temp,
        wind: resp.list[0].wind.speed,
        humidity: resp.list[0].main.humidity,
        icon: `https://openweathermap.org/img/wn/${resp.list[0].weather[0].icon}.png`,
      },
      forecast: dataArray,
    };
    console.log(data);
  });
}

var srcBtn = $('#search-button')
var srcInp = $('#search-input')

srcBtn.on('click', function(e){
  e.preventDefault()
  console.log(srcInp.val())

getData(srcInp.val());
  
})


