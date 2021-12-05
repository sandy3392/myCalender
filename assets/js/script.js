//update the current time on the page with moment
var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
$("#currentDay").html(rightNow);

// saves the input datea when the below event is triggerd
$(".saveBtn").on('click', function(){

    var text = $(this).siblings(".form-control").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,text);
});
// logic to check the current hour and then add colors based on the hour
var hourLogic = function (){

    var currentHour = moment().hours();

    $(".time-block").each(function() {

        var blockHour = $(this).attr("id");
        if (blockHour < currentHour){

            $(this).children(".form-control").addClass("past");

        } else if (blockHour === currentHour){

            $(this).children(".form-control").removeClass("past");
            $(this).children(".form-control").addClass("present");

        } else  {

            $(this).children(".form-control").removeClass("past");
            $(this).children(".form-control").removeClass("present");
            $(this).children(".form-control").addClass("future");

        }
    });       
};

hourLogic();

//get the value from local storage and keep the data persistent
$("#9 .form-control").val(localStorage.getItem("9"));
$("#10 .form-control").val(localStorage.getItem("10"));
$("#11 .form-control").val(localStorage.getItem("11"));
$("#12 .form-control").val(localStorage.getItem("12"));
$("#13 .form-control").val(localStorage.getItem("13"));
$("#14 .form-control").val(localStorage.getItem("14"));
$("#15 .form-control").val(localStorage.getItem("15"));
$("#16 .form-control").val(localStorage.getItem("16"));
$("#17 .form-control").val(localStorage.getItem("17"));

