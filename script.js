
// part 1 - starting the game 

var body = document.body;
var startButton = document.getElementById("start-button"); 
var startTitle = document.querySelector("h1");
var startPara = document.querySelector("p");
var questOne = document.getElementById("question-one");
var questOneAnswers = document.getElementsByClassName("answers-one");

var youAreCorrect = document.createElement("p");
youAreCorrect.textContent = "you are correct!!";

var youAreIncorrect = document.createElement("p");
youAreIncorrect.textContent = "you are incorrect. try again!";


// part 1 a - a disappearing act that results in question 1 

function disappear() {
    startButton.style.display = "none";  
    startTitle.style.display = "none";
    startPara.style.display = "none";
    questOne.style.display = "flex";
    
    for (i=0; i < questOneAnswers.length; i++) { 
    questOneAnswers[i].style.display = "flex";
    }
}

startButton.addEventListener("click", disappear);


// part 2 - when questions are answered 

function answeredRight() {
    body.appendChild(youAreCorrect);
}
questOneAnswers[2].addEventListener("click", answeredRight);


function answeredWrong() { 
    body.appendChild(youAreIncorrect);
    return;
}
questOneAnswers[0].addEventListener("click", answeredWrong);
questOneAnswers[1].addEventListener("click", answeredWrong);
questOneAnswers[3].addEventListener("click", answeredWrong);

if (answeredRight) {
    questOne.style.display = "none";
    questOneAnswers[0].style.display = "none";
}

