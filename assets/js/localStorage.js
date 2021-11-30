
var saveBtnEl = $('saveBtn');

//start save button click event start
$(".saveBtn").on("click", function (event) {

  event.target;
  var inputEL = $(this).siblings("input").val();
  // console.log($(this).siblings("input").val());
  // console.log(inputEL)

  var time = $(this).parent().attr("id")
  localStorage.setItem(time, inputEL)
});
//end save button click event end

//start local storage Start
//storage for 9AM block
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
//storage for 10AM block
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
//storage for 11AM block
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
//storage for 12AM block
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
//storage for 1PM block
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
//storage for 2PM block
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
//storage for 3PM block
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
//storage for 4PM block
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
//storage for 5PM block
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
//end local storage end

// END
