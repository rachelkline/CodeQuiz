var timer = 60;
var time = document.querySelector("#timer");
var questionBox = document.querySelector(".card-title");
var myScore = document.querySelector("#score");
var btnContainer = document.querySelector("#btnContainer")
var index = 0;



//Make an array of questions and answers
var questions = [
    {
        questionTitle: "What should appear at the very end of your JavaScript?",
        a:["The <script>", "The END statement", "The </script>", "None of the above"],
        correctAnswer: "The </script>"
    },
    {
        questionTitle: "How does JavaScript store dates in a date object?",
        a:["The number of hours since the internet first launced","The number of days since January 1st, 1900","The number of seconds since Netscape's public stock offering","The number of milliseconds since January 1st, 1970"],
        correctAnswer: "The number of milliseconds since January 1st, 1970"
    },
    {
        questionTitle: "What is the correct JavaScript syntax to write 'Hello World'?",
        a:["System.out.printIn('Hello World')", "printIn('Hello World')","document.write('Hello World')","response.write('Hello World')"],
        correctAnswer: "document.write('Hello World')"
    },
    {
        questionTitle: "What does the <noscript> tag do?",
        a:["Enclose text to be displayed by non-JavaScript browsers","Prevents scripts on the page from executing","Describes certain low-budget movies","None of the above"],
        correctAnswer: "Enclose text to be displayed by non-JavaScript browsers"
    },
    {
        questionTitle: "JavaScript entities start with _______ and end with _________.",
        a:["Semicolon, colon","Semicolon, Ampersand","Ampersand, colon","Ampersand, semicolon"],
        correctAnswer: "Ampersand, semicolon"
    },
    {
        questionTitle: "Using _______ statement is how you test for a specific condition.",
        a:["Select","If","Switch","For"],
        correctAnswer: "If"
    },
    {
        questionTitle: "Which tag(s) can handle mouse events in Netscape?",
        a:["<IMG>","<A>","<BR>","<P>"],
        correctAnswer: "<A>"
    },
]



//Beginning page with a button to start the quiz
function Start(){
    questionBox.textContent = "Welcome! Please click the button to begin the quiz.";
    btnContainer.innerHTML = "";
    var strtBtn = document.createElement("button");
    strtBtn.textContent = "START";
    strtBtn.onclick = quesStart;
    btnContainer.appendChild(strtBtn);

}

//Quiz starts once the button is cicked
function quesStart () {
    var myTimer = setInterval(function(){
    timer--;
    time.textContent = timer + " seconds left remaining"
    if(timer === 0) {
        alert("Time is up!");
        window.location = ("highscores.html");
        clearInterval(myTimer);
        
    }

    },
    1000);

nextQues ();

}


//Fill the card with the question
function nextQues() {
    myScore.textContent = "Your Score: " + score
     questionBox.textContent = questions[index].questionTitle;
        btnContainer.innerHTML = "";
        
//Create buttons and fill with possible answers
    questions[index].a.forEach(function(answer,i){
        var aBtn = document.createElement("button");
        aBtn.setAttribute("value", answer);
        aBtn.textContent = answer;
        aBtn.onclick = logicClick;
        btnContainer.appendChild(aBtn);
        

    })
    
}

Start();

var userHS = [];
//If the question is answered correctly, go to next question
let score = 0;
function logicClick() {
       
    if(index + 1 >= questions.length) {
        alert("You've finished!")
        score++;
        userHS.push(score);
        localStorage.setItem('userScore', JSON.stringify(userHS));
        window.location = ("highscores.html");
    }


    if(this.value === questions[index].correctAnswer) {
        index++;
        score++;
        nextQues() 
//But if it's answered wrong, take away 5 seconds 
//else if the questions[index] does not equal correct answer, go to the next question and subtract 5 seconds    
    } else {
        nextQues()
        timer -= 5;
    };

    
};



// console.log(setItem('score', score));



// function setScoreCount (){
//     //check if all questions are answered and redirect to high score page
//     if()
    
// };



// let myScore = 
// localStorage.setItem("myScore", myScore.value);

// // Pseudocode
// if(startButtonCLicked) {
//     displayQuestion();
//     startTimer();
// }

// //Timer should be global
// //Dave's idea
// //Pseudocode

// var currentQuestion = 0;

// if(choice3Clicked) {
//     if (questions[currentQuestion]
//     [choice3Clicked.id] === questions
//     [currentQuestion].answer) {
//         //correct answer
//     } else {
//         //Wrong answer, you lose x amount of seconds
//     }
// }

//     if(currentQuestion < 10) {
//         //Go to the next question
//         currentQuestion ++;
//         displayQuestion()

//     } else {
//         //Game over
//     }

// question[0] ["choice3"]