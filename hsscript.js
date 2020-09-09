

//WHAT I NEED TO DO TO GET THIS TO WORK

$(document).ready(function {

    //variables to attach to HTML
    //FIGURE OUT HOW TO GET SCORE DATA TO LOCAL STORAGE
    
    //create an empty array to hold scores
    var userHS = [];

    
    //figure out how to make an ordered list for the scores so that when they post, they will post from highest to lowest
    //Crate a for-loop to iterate through the userHS array

    
    //ATTACH ON-CLICK EVENT TO ADD BUTTON
    //APPEND NAME AND SCORE TO DOCUMENT AND STORE IN LOCAL STORAGE
    var userInput = document.querySelector("#userID");
    var userList = document.querySelector("#name-input");
    var submitBtn = document.querySelector("#button-addon2");

    

    init();







});

function renderUserHiScore() {
    userList.innterHTML = "";

    //Render a new li for each user
    for (var i = 0; i < 10; i++) {
        var user = userHS[i];

        var li = document.createElement("<li>");
        li.textContent = user;
        li.setAttribute(userList, i);
        userList.appendChild(li);
    }
}
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var userText = userInput.value.trim();
    userHS.push(userText);
    userInput.value = "";

});
function init(); {
    //Get stored users from localStorage
    //Parsing the JSON string to an object
    var storedUsers = JSON.parse(localStorage.getItem("users"));

    renderUserHiScore();
}

function storeUsers() {
    localStorage.setItem("users", JSON.stringify(userHS));
}

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





