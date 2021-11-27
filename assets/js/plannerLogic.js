var todaysDateEl = document.querySelector("#currentDay");


// start generate todays date start
var currentDay = new Date();
var today = (currentDay.getMonth()+1) + "/"
    +currentDay.getDate() + "/"
    +currentDay.getUTCFullYear();
//display todays date 
todaysDateEl.textContent = today;
// end generate todays date end

