

//WHAT I NEED TO DO TO GET THIS TO WORK
//variables to attach to HTML
//FIGURE OUT HOW TO GET SCORE DATA TO LOCAL STORAGE
var userInput = document.querySelector("#userID");
var userList = document.querySelector("#name-input");
var submitBtn = document.querySelector("#button-addon2");
// //create an empty array to hold scores
var userHS = [];


$(document).ready(function () {

    //saveScore();
    saveNamenScore();
    function saveNamenScore() {
        //get stored score from localStorage

        var score = JSON.parse(localStorage.getItem('userScore'));



        // };


        //Event listener for button click
        submitBtn.addEventListener("click", function (event) {
            event.preventDefault();
            var userText = userInput.value;
            //console.log(userText);
            var finalScore = { name: userText, score: score }
            userHS.push(finalScore);

            localStorage.setItem("highscore", JSON.stringify(userHS));
            var lStorage = JSON.parse(localStorage.getItem("highscore"));

            userHS.push(lStorage);

            //set a for loop that will render a new li for each high score




            for (i = 0; i < userHS.length; i++) {
                
                //variable totalScore creates a new list object
                var totalScore = $('<li>');
                totalScore.text("Name: " + lStorage[i].name + "\n\nScore: " + lStorage[i].score);
                $('ol').append(totalScore);

                console.log(userHS[i]);

            };
            // lStorage.forEach((obj, i) => {
            //     console.log("name", obj.name);
            //     console.log("score", obj.score);

            // })

        });


    };

});







    // }, {once : true});








