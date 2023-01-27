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

var cardDeck = $('<div>')
cardDeck.attr('class', 'card-deck px-3' )
forecastBox.append(cardDeck)

var foreCard = $('<div class="card">')
cardDeck.append(foreCard)

var dateCardBody = $('<div class="card-body">')
foreCard.append(dateCardBody)

var foreCardTitle = $('<h5 class="card-title">');
dateCardBody.append(foreCardTitle)

foreCardTitle.text(`${city} (${date})`);

console.log(forecastBox);

var foreCard = $('<div class="card">')
cardDeck.append(foreCard)

var dateCardBody = $('<div class="card-body">')
foreCard.append(dateCardBody)

var foreCardTitle = $('<h5 class="card-title">');
dateCardBody.append(foreCardTitle)

foreCardTitle.text(`${city} (${date})`);



var foreCard = $('<div class="card">')
cardDeck.append(foreCard)

var dateCardBody = $('<div class="card-body">')
foreCard.append(dateCardBody)

var foreCardTitle = $('<h5 class="card-title">');
dateCardBody.append(foreCardTitle)

foreCardTitle.text(`${city} (${date})`);



var foreCard = $('<div class="card">')
cardDeck.append(foreCard)

var dateCardBody = $('<div class="card-body">')
foreCard.append(dateCardBody)

var foreCardTitle = $('<h5 class="card-title">');
dateCardBody.append(foreCardTitle)

foreCardTitle.text(`${city} (${date})`);


var foreCard = $('<div class="card">')
cardDeck.append(foreCard)

var dateCardBody = $('<div class="card-body">')
foreCard.append(dateCardBody)

var foreCardTitle = $('<h5 class="card-title">');
dateCardBody.append(foreCardTitle)

foreCardTitle.text(`${city} (${date})`);





