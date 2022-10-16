/* 
1. load today's date in header
1b. Create form for start hour and end hour, generate scheduler based on user input
2. hide "appointment added", show when save icon is clicked
3. save textarea to local storage
4. color time rows based on past, present, and future
5. Add "All done!" button that clears localstorage

*/

//Render today's date into header
function todaysDate() {
    var tDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(tDate);
}

//Add onload events here
window.onload = todaysDate();


