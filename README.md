# Work-Day-Scheduler

## Project Title

To build a fairly basic work day scheduler with 8 time blocks from 9AM to 4PM and the current day and date displayed, this will update automatically. Each time block will automatically change color to indicate whether it is the present hour, a past hour or future hour. The user can make entries that are saved into local storage and are still vistible when webpage is refreshed.  

Note: The HTML and CSS code was provided, with some minor amendments required.

## Work Day Scheduler 

The Work Day Schedular is an interactive work schedule webpage.  It enables the user to add events and track their daily tasks easily through the use of clever color coding and the ability to save entries to local storage.  These entries remain visible even when the page is refreshed. which remain visible on the webpage 

The Time Code Quiz webpage is an easy to complete quiz that assesses the basic JavaScript knowledge of the user and provides immediate feedback. Having been purposedly designed to meet several non-functional requirements such as, usability and accessibility. It also requires the user to answer all five questions in a timely manner, or execution of program will terminate.
 that is will default to the home page when sec===0. The 'Go Back' function allows the user, or another person can take the quiz again straight away. When all questions are answered the clock stops and the user is asked to input their initials. Their initial and score is saved into local storage. The Timed Code Quiz has been built using HTML, CSS, and JavaScript. 

## Project Description

The objective of this project was to build a quiz to assess the users basic JavaScript knowledge and learn by redoing the quiz straight away or from another person completing the quiz.

Note: A description of how to use the completed web page appears in the 'Usage' section below.

The structure of the coding and what each section does is as follows:

1. Create the array object to hold the questions, choices, and correct answer, include the answer not just its corresponding number (i.e., 3. Alerts).

2. Set-up the home page with text and a start-quiz button to navigate to the first question.

3. Display first question & four options

4. Timer starts, reduces by one second from 75 seconds.

5. When user clicks button to enter their answer program proceeds to next question:
- If answer is correct displays the word "Correct!" and score increases by one.

- If answer is incorrect displays the word "Incorrect" and timer reduces by 15 seconds straight away 

6. Program loops through all five questions using i = [0], [1], [2], [3], [4].

7. When all questions are answered the program navigates to an end of quiz page where their score is displayed, and they are asked to enter their initials. 

8.  Upon clicking submit button program navigates to a final page (high scores) where their initials, and score is displayed.

9. Their initials and score are also saved to local storage.

10. By clicking on the 'goBack' button the program is reloaded and returns to the front page of the application, and the quiz can be repeated.

## Installation

N/A

## Usage

The Timed-Code-Quiz Password is used to assess and improve the user’s general knowledge of JavaScript. 

To use the application the user clicks on the 'Start Quiz' button' The first question is displayed and the user clicks on the button that they believe displays the correct answer. The user then answers a total of five questions to complete the quiz. 

The application has built in business rules so if the user does not complete the quiz within the specified 75 seconds the execution of program is terminated, and it returns to the front page of the application. Users are penalised 15 seconds each time they answer a question incorrectly. Each correct answer increases the score by one.

If the quiz is completed within the seventy-five second timeframe the final score is displayed, the user enters their initial and clicks on the submit button to display their initial and final score, that are also placed in storage.

## Deployed Application and Screenshot

##### Link to the deployed application:

Link:  

##### Screenshot

Home page:  https://nealeaust.github.io/Work-Day-Scheduler/

![image](https://user-images.githubusercontent.com/115671306/209070501-5e2c8569-ebbf-4918-987b-2919a19d3443.png)




## Credits

N/A

## License

https://github.com/NealeAust/Work-Day-Scheduler/blob/main/LICENSE



