
// start generate todays date start
var todaysDateEl = $("#currentDay");
var currentDay = new Date();
todaysDateEl.text(currentDay.toDateString());
// End generate todays date End

var taskTime= function (){
    var time = currentDay.getHours();
    console.log(time);
    if (time === 9) {
        $("textarea.nineAMBlock").addClass("present")
        console.log('red')
    }else if(time >= 9 ){
        $("textarea.nineAMBlock").addClass("past")
    }else{
        $("textarea.nineAMBlock").addClass("future")
    }

    if (time === 10) {
        $("textarea.tenAMBlock").addClass("present")
        console.log('red')
    }else if(time >= 10){
        $("textarea.tenAMBlock").addClass("past")
    }else{
        $("textarea.tenAMBlock").addClass("future")
    }

    if (time === 11) {
        $("textarea.elevAMBlock").addClass("present")
        console.log('red')
    }else if(time >= 11){
        $("textarea.elevAMBlock").addClass("past")
    }else{
        $("textarea.elevAMBlock").addClass("future")
    }

    if (time === 12) {
        $("textarea.twelPMBlock").addClass("present")
        console.log('red')
    }else if(time >= 12){
        $("textarea.twelPMBlock").addClass("past")
    }else{
        $("textarea.twelPMBlock").addClass("future")
    }

    if (time === 13) {
        $("textarea.onePMblock").addClass("present")
        console.log('red')
    }else if(time >= 13 ){
        $("textarea.onePMblock").addClass("past")
    }else{
        $("textarea.onePMblock").addClass("future")
    }

    if (time === 14) {
        $("textarea.twoPMBlock").addClass("present")
        console.log('red')
    }else if(time >= 14 ){
        $("textarea.twoPMBlock").addClass("past")
    }else{
        $("textarea.twoPMBlock").addClass("future")
    }

    if (time === 15) {
        $("textarea.threePMBlock").addClass("present")
        console.log('red')
    }else if(time >= 15 ){
        $("textarea.threePMBlock").addClass("past")
    }else{
        $("textarea.threePMBlock").addClass("future")
    }

    if (time === 16) {
        $("textarea.fourPMBlock").addClass("present")
        console.log('red')
    }else if(time >= 16 ){
        $("textarea.fourPMBlock").addClass("past")
    }else{
        $("textarea.fourPMBlock").addClass("future")
    }

    if (time === 17) {
        $("textarea.fivePMBlock").addClass("present")
        console.log('red')
    }else if(time >= 17){
        $("textarea.fivePMBlock").addClass("past")
    }else{
        $("textarea.fivePMBlock").addClass("future")
    }
}
    taskTime();











    // var taskTime= function (){
    //     var time = currentDay.getHours();
    //     console.log(time);
    //     if (time === 10) {
    //         console.log('red')
    //     }else if(time >= 10 ){
    //         console.log('grey')
    //     }else{
    //         console.log('green')
    //     }
    