JAVASCRIPT QUIZ

In this assignment, we were tasked with creating a functional timed multi-choice Javascript quiz that included interactive challenges. We were not given any starter code.

To complete this task, I first had to create the skeleton for the Javascript/jQuery to work. After creating a simple card layout in an HTML, I then linked it to a script.js that would dictate what would happen on the page. I created a set of questions and answers as objects and then set them inside an array. Then, I created a function called Start that would be the "Welcome" page. It includes a start button linked to the function quesStart() for the timer to kick off.

Once this function is running, the timer has started. I then created buttons in javascript that would automatically fill into the empty card body. The user has 60 seconds to click the right buttons and complete the quiz. If a question is answered incorrectly, 5 seconds are docked from the time. If the timer runs out or the question index has finished, the user is directed to the High Scores page.

I then saved the score data using local storage. Once re-directed to the High Scores page, the user can enter their name and when the "add" button is pressed, their name will appear next to their score. I made a new array and pushed the previous score data into it with a new variable I made that would include the user input. Then, I crated a for-loop that would render a new list for each high score. This is the only issue I ran into, as my for-loop continued to loop the entire array instead of the objects inside. 

Overall, this assignment was very challenging. I enjoyed learning a lot from it and although I didn't execute it perfectly, I thought I did a pretty good job! I will continue to work on the for loop after submitting this assignment to try to get everything perfect.

*I included a screen grab of my project as I was adivsed to do this in the last homework assignment!!