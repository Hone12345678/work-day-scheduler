var todaysDateEl = document.querySelector("#currentDay");


// start generate todays date start
var currentDay = new Date();
currentDay.toDateString();

// display todays current date
todaysDateEl.textContent = currentDay;
// End generate todays date End


