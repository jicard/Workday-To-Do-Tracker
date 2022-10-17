//Render today's date into header
function todaysDate() {
    var tDate = moment().local().format("ddd, MMM Do, YYYY - h:mm:ss a");
    $("#currentDay").text(tDate);
    setTimeout(todaysDate, 1000);
    //tDate.split("");
    //console.log(tDate);
}

function changeColor() {
    var currentTime = parseInt(moment().local().format("H"));
    var rowTime = document.getElementsByClassName("number");
    var rowTimeArray = Object.values(rowTime);
    var rowDiv = document.getElementsByClassName("col-md-10 description")
    var rowDivArray = Object.values(rowDiv);
    for (i = 0; i < rowDivArray.length; i++) {
    var rowTimeArrayText = +rowTimeArray[i].outerText;
    if (rowTimeArrayText === currentTime) {
        rowDiv[i].classList.add("present");
    } else if (rowTimeArrayText < currentTime) {
        rowDiv[i].classList.add("past");
    } else if (rowTimeArrayText > currentTime) {
        rowDiv[i].classList.add("future");
    }
}
}

function sendToLocal() {
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })})
}

function getFromLocal() {
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
}

var currentTime = parseInt(moment().local().format("H"));
var rowTime = document.getElementsByClassName("number");
var rowTimeArray = Object.values(rowTime);
var rowTimeArrayNumber = rowTimeArray[5].outerText;
function changeToTwelve() {
    $("#hour-13 .number").text(rowTimeArray[4].outerText - 12);
    $("#hour-14 .number").text(rowTimeArray[5].outerText - 12);
    $("#hour-15 .number").text(rowTimeArray[6].outerText - 12);
    $("#hour-16 .number").text(rowTimeArray[7].outerText - 12);
    $("#hour-17 .number").text(rowTimeArray[8].outerText - 12);
    $("#hour-9 .ampm").text("am");
    $("#hour-10 .ampm").text("am");
    $("#hour-11 .ampm").text("am");
    $("#hour-12 .ampm").text("pm");
    $("#hour-13 .ampm").text("pm");
    $("#hour-14 .ampm").text("pm");
    $("#hour-15 .ampm").text("pm");
    $("#hour-16 .ampm").text("pm");
    $("#hour-17 .ampm").text("pm");
}

//Add onload events here
window.onload = function onload() {
    todaysDate();
    $("#notify").hide();
    changeColor();
    getFromLocal();
    sendToLocal();
    changeToTwelve();
}