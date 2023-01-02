var saveBtn = $(".saveBtn");

var currentDate = document.querySelector("h2");
currentDate.textContent = dayjs().format('dddd, MMMM D')

function timeBlockColor() {
    now = dayjs().hour()
    console.log(now)
    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("value"));

        console.log(this); //each time-block

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

saveBtn.on("click", function () {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var textEntry = $(this).siblings(".description").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, textEntry);
});


function addEvent() {

    $(".hour").each(function () {
        var currentHour = $(this).text();
        var event = localStorage.getItem(currentHour);

        // console.log(this);
        // console.log(currHour);

        if (currentHour !== null) {
            $(this).siblings(".description").val(event);
        }
    });
}

/**
* CALL FUNCTIONS
*/

timeBlockColor();
addEvent();
















