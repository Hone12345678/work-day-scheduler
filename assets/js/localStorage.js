
var saveBtnEl = $('saveBtn');


$(".saveBtn").on("click", function (event) {

  event.target;
  var inputEL = $(this).siblings("input").val();
  // console.log($(this).siblings("input").val());
  // console.log(inputEL)

  var time = $(this).parent().attr("id")
  localStorage.setItem(time, inputEL)

});

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))




//   if save button is clicked add input element to the array

// END
