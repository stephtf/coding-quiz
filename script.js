
// variables - starting the quiz 

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


// part 1 - a disappearing act that results in question One 

function disappear() {
    setTime();  
    startButton.style.display = "none";  
    startTitle.style.display = "none";
    startPara.style.display = "none";
    questOne.style.display = "flex";
    
    for (i=0; i < questOneAnswers.length; i++) { 
    questOneAnswers[i].style.display = "flex";
    }
}

startButton.addEventListener("click", disappear);


// part 2 - setting a timer 
var secondsLeft = 100;
var timeEl = document.querySelector(".time");

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "you have " + secondsLeft + " left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
}


// part 3 - when questions are answered (what happens next?!)

function answeredRight() {
    body.appendChild(youAreCorrect);
}
questOneAnswers[2].addEventListener("click", answeredRight);


// part 4 - i needed to create a timer to remove the text that gets added when the user answers questions!

function answeredWrong() { 
    body.appendChild(youAreIncorrect); 
    youAreIncorrect.style.display="flex";
    secondsLeft = secondsLeft-10;

    var second = 1
      function secondTime() {
        var timerInterval1 = setInterval(function() {
          second--;

          if(second === 0) {
            clearInterval(timerInterval1);
            youAreCorrect.style.display = "none";
            youAreIncorrect.style.display = "none";
          }
        }, 1000);
      }
      secondTime();
} 

function answeredRight() { 
  body.appendChild(youAreCorrect); 
  youAreCorrect.style.display="flex";
  var second = 1
    function secondTime() {
      var timerInterval1 = setInterval(function() {
        second--;

        if(second === 0) {
          clearInterval(timerInterval1);
          youAreCorrect.style.display = "none";
          youAreIncorrect.style.display = "none";
        }
      }, 1000);
    }
    secondTime();
}

questOneAnswers[0].addEventListener("click", answeredWrong);
questOneAnswers[1].addEventListener("click", answeredWrong);
questOneAnswers[3].addEventListener("click", answeredWrong);

// part 5 - moving on to the next question 

// here i gotta figure out how to move the user to the next question after they answer either correct or incorrectly





