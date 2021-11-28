
// start generate todays date start
var todaysDateEl = $("#currentDay");
var currentDay = new Date();
todaysDateEl.text(currentDay.toDateString());
// End generate todays date End

var taskTime= function (){
    var time = currentDay.getHours();
    console.log(time);
    if (time === 9) {
        $("input.nineAMBlock").addClass("present")
        console.log('red')
    }else if(time >= 9 ){
        $("input.nineAMBlock").addClass("past")
    }else{
        $("input.nineAMBlock").addClass("future")
    }

    if (time === 10) {
        $("input.tenAMBlock").addClass("present")
        console.log('red')
    }else if(time >= 10){
        $("input.tenAMBlock").addClass("past")
    }else{
        $("input.tenAMBlock").addClass("future")
    }

    if (time === 11) {
        $("input.elevAMBlock").addClass("present")
        console.log('red')
    }else if(time >= 11){
        $("input.elevAMBlock").addClass("past")
    }else{
        $("input.elevAMBlock").addClass("future")
    }

    if (time === 12) {
        $("input.twelPMBlock").addClass("present")
        console.log('red')
    }else if(time >= 12){
        $("input.twelPMBlock").addClass("past")
    }else{
        $("input.twelPMBlock").addClass("future")
    }

    if (time === 13) {
        $("input.onePMblock").addClass("present")
        console.log('red')
    }else if(time >= 13 ){
        $("input.onePMblock").addClass("past")
    }else{
        $("input.onePMblock").addClass("future")
    }

    if (time === 14) {
        $("input.twoPMBlock").addClass("present")
        console.log('red')
    }else if(time >= 14 ){
        $("input.twoPMBlock").addClass("past")
    }else{
        $("input.twoPMBlock").addClass("future")
    }

    if (time === 15) {
        $("input.threePMBlock").addClass("present")
        console.log('red')
    }else if(time >= 15 ){
        $("input.threePMBlock").addClass("past")
    }else{
        $("input.threePMBlock").addClass("future")
    }

    if (time === 16) {
        $("input.fourPMBlock").addClass("present")
        console.log('red')
    }else if(time >= 16 ){
        $("input.fourPMBlock").addClass("past")
    }else{
        $("input.fourPMBlock").addClass("future")
    }

    if (time === 17) {
        $("input.fivePMBlock").addClass("present")
        console.log('red')
    }else if(time >= 17){
        $("input.fivePMBlock").addClass("past")
    }else{
        $("input.fivePMBlock").addClass("future")
    }
} 
    taskTime();
