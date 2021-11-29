
// start generate todays date start
var todaysDateEl = $("#currentDay");
var currentDay = new Date();
todaysDateEl.text(currentDay.toDateString());
// end generate todays date end
  
// start task time function start
// works with the input divs in the index.html to color code the input based on if the time is past present or future
var taskTime= function (){
    var time = currentDay.getHours();
    console.log(time);
   
    // start 9AM color coding logic start
    if (time === 9) {
        $("input.nineAMBlock").addClass("present")
        console.log('red')
    }else if(time >= 9 ){
        $("input.nineAMBlock").addClass("past")
    }else{
        $("input.nineAMBlock").addClass("future")
    }
    // end 9AM color coding logic end

    // start 10AM color coding logic start
    if (time === 10) {
        $("input.tenAMBlock").addClass("present")
        console.log('red')
    }else if(time >= 10){
        $("input.tenAMBlock").addClass("past")
    }else{
        $("input.tenAMBlock").addClass("future")
    }
    // end 10AM color coding logic end
    
    // start 11AM color coding logic start
    if (time === 11) {
        $("input.elevAMBlock").addClass("present")
        console.log('red')
    }else if(time >= 11){
        $("input.elevAMBlock").addClass("past")
    }else{
        $("input.elevAMBlock").addClass("future")
    }
    // end 11AM color coding logic end

    // start 12PM color coding logic start
    if (time === 12) {
        $("input.twelPMBlock").addClass("present")
        console.log('red')
    }else if(time >= 12){
        $("input.twelPMBlock").addClass("past")
    }else{
        $("input.twelPMBlock").addClass("future")
    }
    // end 12PM color coding logic end
    
    // start 1PM color coding logic start
    if (time === 13) {
        $("input.onePMblock").addClass("present")
        console.log('red')
    }else if(time >= 13 ){
        $("input.onePMblock").addClass("past")
    }else{
        $("input.onePMblock").addClass("future")
    }
    // end 1PM color coding logic end
    
    // start 2PM color coding logic start
    if (time === 14) {
        $("input.twoPMBlock").addClass("present")
        console.log('red')
    }else if(time >= 14 ){
        $("input.twoPMBlock").addClass("past")
    }else{
        $("input.twoPMBlock").addClass("future")
    }
    // end 2PM color coding logic end

    // start 3PM color coding logic start
    if (time === 15) {
        $("input.threePMBlock").addClass("present")
        console.log('red')
    }else if(time >= 15 ){
        $("input.threePMBlock").addClass("past")
    }else{
        $("input.threePMBlock").addClass("future")
    }
    // end 3PM color coding logic end

    // start 4PM color coding logic start
    if (time === 16) {
        $("input.fourPMBlock").addClass("present")
        console.log('red')
    }else if(time >= 16 ){
        $("input.fourPMBlock").addClass("past")
    }else{
        $("input.fourPMBlock").addClass("future")
    }
    // end 4PM color coding logic end

    // start 5PM color coding logic start
    if (time === 17) {
        $("input.fivePMBlock").addClass("present")
        console.log('red')
    }else if(time >= 17){
        $("input.fivePMBlock").addClass("past")
    }else{
        $("input.fivePMBlock").addClass("future")
    }
    // end 5PM color coding logic end
};
// end task time function end

taskTime();

// END
