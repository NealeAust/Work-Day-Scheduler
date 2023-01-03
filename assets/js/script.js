// Declare variables
var saveBtn = $(".saveBtn");

// Get and display current day at top of schedule
var currentDate = document.querySelector("h2");
currentDate.textContent = dayjs().format('dddd, MMMM D')

function timeBlockColor() {

    //Get time 'now' and print in console.log   
    now = dayjs().hour()
    console.log(now)

    // Compares to current hour & color codes each time block to indicate if past, present or future.
    // Prints a list of each time-block in console.log to indicate if past, present or future.
    // Does not indicate class change in HTML.
    // Value in 'attr' makes easier to parseInt.
    
    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("value"));

        console.log(this); 

        if (now > currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (now < currentHour) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");

        }

    })
}

// When user clicks on save button a entry in schedule is saved to local storage.
saveBtn.on("click", function () {

    var time = $(this).siblings(".hour").text();
    var textEntry = $(this).siblings(".description").val();

    localStorage.setItem(time, textEntry);
});

//When page is refreshed entries in schedule persist.
function userEntry() {

    $(".hour").each(function () {
        var currentHour = $(this).text();
        var recordEntry = localStorage.getItem(currentHour);

        if (currentHour !== null) {
            $(this).siblings(".description").val(recordEntry);

        }
    });
}

// Call functions

timeBlockColor();
userEntry();
















