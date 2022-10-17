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
        rowDiv[i].classList.add("present");
    } else if (rowTimeArrayText < currentTime) {
        rowDiv[i].classList.add("past");
    } else if (rowTimeArrayText > currentTime) {
        rowDiv[i].classList.add("future");
    }
}
}

//Add onload events here
window.onload = function onload() {
    todaysDate();
    $("#notify").hide();
    changeColor();
}

/*
var saveButtons = document
$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // get nearby values

        // save in localStorage

        // Show notification that item was saved to localStorage by adding class 'show'

        // Timeout to remove 'show' class after 2 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 2000);
    });
*/
/*
document.getElementsByClassName("btn").addEventListener("click", function saveToLocal() {
    var toDoNotes = document.getElementsByClassName("description").value;
    localStorage.setItem("notes", toDoNotes);
    $("#notify").show();
    console.log("To-Do List Saved")
}
)
*/




