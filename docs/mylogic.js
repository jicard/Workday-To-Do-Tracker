//Render today's date into header

function todaysDate() {
    var tDate = moment().local().format("ddd, MMM Do, YYYY - h:mm:ss a");
    $("#currentDay").text(tDate);
    setTimeout(todaysDate, 1000);
    //tDate.split("");
    //console.log(tDate);
}

var nineam = document.getElementById("hour9");
var tenam = document.getElementById("hour10");
var elevenam = document.getElementById("hour11");
var twelvepm = document.getElementById("hour12");
var onepm = document.getElementById("hour13");
var twopm = document.getElementById("hour14");
var threepm = document.getElementById("hour15");
var fourpm = document.getElementById("hour16");
var fivepm = document.getElementById("hour17");

var nineamrow = document.getElementById("hour-9");
var tenamrow = document.getElementById("hour-10");
var elevenamrow = document.getElementById("hour-11");
var twelvepmrow = document.getElementById("hour-12");
var onepmrow = document.getElementById("hour-13");
var twopmrow = document.getElementById("hour-14");
var threepmrow = document.getElementById("hour-15");
var fourpmrow = document.getElementById("hour-16");
var fivepmrow = document.getElementById("hour-17");

function changeColor() {
    currentTime = parseInt(moment().local().format("H"));
    console.log(currentTime);
    var rowTime = document.getElementsByClassName("number");
    console.log(rowTime);
    var rowTimeArray = Object.values(rowTime);
    console.log(rowTimeArray);
    var rowDiv = document.getElementsByClassName("col-md-10 description")
    var rowDivArray = Object.values(rowDiv);
    for (i = 0; i < rowDivArray.length; i++) {
    var rowTimeArrayText = +rowTimeArray[i].outerText;
    console.log(typeof rowTimeArrayText);
    console.log(typeof currentTime);
    if (rowTimeArrayText === currentTime) {
        rowDiv[i].style.backgroundColor = "green"
    } else if (rowTimeArrayText < currentTime) {
        rowDiv[i].style.backgroundColor = "red";
    } else if (rowTimeArrayText > currentTime) {
        rowDiv[i].style.backgroundColor = "blue";
    }
}
}

function


//Add onload events here
window.onload = function onload() {
    todaysDate();
    $("#notify").hide();
    changeColor();
}
