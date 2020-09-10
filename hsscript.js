

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
            //userHS.push(lstorage);
           
            //set a for loop that will render a new li for each high score


           

             for(i = 0; i < userHS.length; i++) {
              //variable totalScore creates a new list object
              
              var totalScore = $('<li>');
              totalScore.text("Name: " + lStorage[i].name + "Score: " + lStorage[i].score); 
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




    // var userText = userInput.value;
    //     // userHS.push(userText);
    //     userInput.value = "";
    //     userText.appendTo("#name-input");



    // function renderUserHiScore() {
    //      userList.innterHTML = "";

    //         //Render a new li for each user
    //     for (var i = 0; i < 10; i++) {
    //         var user = userHS[i];

    //         var li = document.createElement("<li>");
    //         li.textContent = user;
    //         li.setAttribute(userList, i);
    //         userList.appendChild(li);




    //         };
    //    };
    // }





//  init();
// function init(); {
//     //Get stored users from localStorage
//     //Parsing the JSON string to an object
//     var storedUsers = JSON.parse(localStorage.getItem("users"));

//     renderUserHiScore();
// }

// function storeUsers() {
//     localStorage.setItem("users", JSON.stringify(userHS));
// }

//When form is submitted...


    // storeUsers();
    // renderUserHiScore();
    // var newDiv = $("<li>");
    //     newDiv.text(user);
    //     $("#name-input").append(newDiv);

// userList.addEventListener("submit", function(event) {
//     event.preventDefault();

//     var userText = userInput.value.trim();


// renderLastRegistered();

// function renderLastRegistered() {
//     var user = localStorage.getItem ("user");
//     // var userScore = localStorage.getItem("score");
// }






//     localStorage.setItem("user", user);
//     renderLastRegistered();
// });





