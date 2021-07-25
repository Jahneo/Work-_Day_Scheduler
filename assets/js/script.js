// create variable to display  current date
var todayDate = moment().format('dddd, MMMM Do YYYY');

    // Display today's day 
    $("#currentDay").html(todayDate);

    //Print date on console debugging tips
    console.log(todayDate);

    // calling the function that allows the page to be manipulated
    $(document).ready(function () {
    console.log("ready");
    
    // listen for saveBtn to be clicked 
    $(".saveBtn").on("click", function () {

        // Get nearby values of the description in JQuery
         var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

         // Save text in local storage
        localStorage.setItem(time, task);
    })
   
    // function to track time which will allow backgrounds to 
    // change for present past and future timeblocks
    function keepTrackONTime() {
        //get current number of hours.
        //reference moments,js for time function
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        });
    }
keepTrackONTime();


    // Get item from local storage if any
 
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));

    keepTrackONTime();
})