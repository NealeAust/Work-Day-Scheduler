# Work-Day-Scheduler

## Project Title

To build a simple workday scheduler with 8 separate time-blocks from 9AM to 4PM and the current day and date displayed at the top of the page; this will update automatically. Each time-block will automatically change colour to indicate whether it is the present hour, a past hour or future hour. The user can make entries that are saved into local storage and are still visible when webpage is refreshed.  

 - The HTML and CSS code is provided, with some minor amendments required.

 - To build this web application the jQuery, jQueryUI, Bootstrap and Day.js applications/libraries are to be used to streamline coding.

## Work Day Scheduler 

The Work Day Scheduler is an interactive work schedule webpage. It enables the user to add events and track their daily tasks easily due to clever colour coding and the ability to save entries to local storage. User entries remain visible even when webpage is refreshed. 

The webpage is very user friendly with a colourful and pleasant appearance. The colours of the time-block rows change automatically with a red background indicating the present hour (now), grey representing an hour that has past, and bright green indicating a future hour not yet reached. The save button is also a colourful aqua colour. 

It is worth noting that the coding includes two console.log entries. These enable a user to go into the console and confirm that the hour recorded as 'now' is correct and verify that the class’s indicating, past, present and future have been updated as required. 

The Work Day Scheduler has been built using HTML, CSS, and JavaScript. Much of the JavaScript coding consists of jQuery, jQueryUI and Day.js methods. This required researching their libraries and calling these methods, as opposed to completing a large volumes of coding.

## Project Description

The objective of this project was to build a workday schedule that enables a staff member to plan their day by recording meetings, appointments and/or other entries that are applicable to their role.

The structure of the coding and what each section does is as follows:

1. HTML - Set up the remaining time-blocks to ensure there are 8 separate hourly time-blocks between 9AM and 4PM.

2. HTML - Ensure there are links to Day.js, jQuery, jQueryUI and Bootstrap.

3. HTML - Add a value = 9 to 16 against the 8 separate time-blocks. This simplifies interactivity with JavaScript; importantly establishing past, present and future time-blocks and colour coding accordingly.

4. JavaScript - Use coding and dayjs() to automatically display the current day and date (dddd, MMMM, d) at the top of the planner.

5. JavaScript - Use dayjs() to automatically return the hour 'now'.

6. JavaScript - Use jQuery methods and interactivity with HTML to write a conditional statement to establish if each hour in the schedule is past, present or future.

- This triggers a change event, which changes the colour of one or more time-block rows.

7. JavaScript - Add eventListener (.on) to save button, and jQuery methods to save time and text that has been entered into local storage.

- Savebtn variable declared at the top of the page.

8.  JavaScript – Use localStorage.getItem to ensure entries persist upon refresh of web page.

9. Call functions

## Installation

N/A

## Usage

The Work Day Scheduler has a wide range of uses and benefits. Primarily it is a time management tool that helps staff to remain organised and plan their day, and where applicable help manage staff. Correct use of the scheduler will avoid double booking of meetings and/or appointments and ensure the staff member does not forget an important event.

To use the application the user makes an entry and clicks on the save button. The entry is subsequently saved into local storage and remains visible on the webpage even upon refresh. The automatic colour coding of the time-blocks is a clever feature that has numerous benefits, including minimising the risk of an appointment accidently being set in a timeframe that is in the past.

## Deployed Application and Screenshot

##### Link to the deployed application:

Link:  https://nealeaust.github.io/Work-Day-Scheduler/

##### Screenshot

 ![image](https://user-images.githubusercontent.com/115671306/210290150-981d4425-36a5-40e8-8d1c-c6f2c8a2a620.png)

## Credits

N/A

## License

https://github.com/NealeAust/Work-Day-Scheduler/blob/main/LICENSE




