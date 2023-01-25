var historyList = $('#history');
var list = $('<ul>')

var historyItem1 = $('<li>')
var historyItem2 = $('<li>')
var historyItem3 = $('<li>')
var historyItem4 = $('<li>')
var historyItem5 = $('<li>')
var historyItem6 = $('<li>')

historyItem1.addClass('btn btn-secondary')
historyItem2.addClass('btn btn-secondary')
historyItem3.addClass('btn btn-secondary')
historyItem4.addClass('btn btn-secondary')
historyItem5.addClass('btn btn-secondary')
historyItem6.addClass('btn btn-secondary')

historyList.append(list)
list.append(historyItem1)
historyList.append(list)
list.append(historyItem2)
historyList.append(list)
list.append(historyItem3)
historyList.append(list)
list.append(historyItem4)
historyList.append(list)
list.append(historyItem5)
historyList.append(list)
list.append(historyItem6)

historyItem1.text('Test 11111')
historyItem2.text('Test 22222')
historyItem3.text('Test 33333')
historyItem4.text('Test 44444')
historyItem5.text('Test 55555')
historyItem6.text('Test 66666')




console.log(historyList)
