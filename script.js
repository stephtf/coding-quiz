
// variables - starting the quiz 

var body = document.body;
var startButton = document.getElementById("start-button"); 
var startTitle = document.querySelector("h1");
var startPara = document.querySelector("p");
var questOne = document.getElementById("question-one");
var questOneAnswers = document.getElementsByClassName("answers-one");
var questTwo = document.getElementById("question-two");
var questTwoAnswers = document.getElementsByClassName("answers-two");
var questThree = document.getElementById("question-three");
var questThreeAnswers = document.getElementsByClassName("answers-three");
var questFour = document.getElementById("question-four");
var questFourAnswers = document.getElementsByClassName("answers-four");
var questFive = document.getElementById("question-five");
var questFiveAnswers = document.getElementsByClassName("answers-five");

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
      timeEl.textContent = "You have " + secondsLeft + " left ";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        timeEl.textContent = "Game Over! Thanks for playing";

        sendMessage();
      }
    }, 1000);
}


// part 3 - when questions are answered (what happens next?!)


questOneAnswers[2].addEventListener("click", function() {answeredRight("one","two")});

questTwoAnswers[2].addEventListener("click", function() {answeredRight("two","three")});

questThreeAnswers[3].addEventListener("click", function() {answeredRight("three","four")});

questFourAnswers[0].addEventListener("click", function() {answeredRight("four","five")});

questFiveAnswers[2].addEventListener("click", function() {answeredRight("five","one")});


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

function answeredRight(current, next) { 
  body.appendChild(youAreCorrect); 
  youAreCorrect.style.display="flex";
  var second = 1
    function secondTime() {
      var timerInterval1 = setInterval(function() {
        second--;

        if(second === 0) {
          //If question is answered right, we 
          //(1) Clear the timer
          clearInterval(timerInterval1);

          //(2) Clear the current set of questions and the text that displays the user got the question right
          youAreCorrect.style.display = "none";

          movingOn(current, next);

          // questOne.style.display = "none";
          // questOneAnswers[0].style.display = "none";
          // questOneAnswers[1].style.display = "none";
          // questOneAnswers[2].style.display = "none";
          // questOneAnswers[3].style.display = "none";

          // (3) Display the next set of questions
           
        }
      }, 1000);
    }
    secondTime();
    
}

questOneAnswers[0].addEventListener("click", answeredWrong);
questOneAnswers[1].addEventListener("click", answeredWrong);
questOneAnswers[3].addEventListener("click", answeredWrong);

questTwoAnswers[0].addEventListener("click", answeredWrong);
questTwoAnswers[1].addEventListener("click", answeredWrong);
questTwoAnswers[3].addEventListener("click", answeredWrong);

questThreeAnswers[0].addEventListener("click", answeredWrong);
questThreeAnswers[1].addEventListener("click", answeredWrong);
questThreeAnswers[2].addEventListener("click", answeredWrong);

questFourAnswers[1].addEventListener("click", answeredWrong);
questFourAnswers[2].addEventListener("click", answeredWrong);
questFourAnswers[3].addEventListener("click", answeredWrong);

questFiveAnswers[0].addEventListener("click", answeredWrong);
questFiveAnswers[1].addEventListener("click", answeredWrong);
questFiveAnswers[3].addEventListener("click", answeredWrong);


// part 5 - moving on to the next question 

  // hiding current question and displaying next one
 function movingOn(current, next) {
    var currentQ = document.getElementById("question-" + current);
    currentQ.style.display = "none"; 
    var nextQ = document.getElementById("question-" + next);
    nextQ.style.display = "flex";

  // hiding current answers and displaying next ones
    var currentAnswers = document.getElementsByClassName("answers-" + current); 
    for (i=0; i < currentAnswers.length; i++) {
      currentAnswers[i].style.display = "none"; 
    }

    var nextAns = document.getElementsByClassName("answers-" + next); 
    for (i=0; i < nextAns.length; i++) {
      nextAns[i].style.display = "flex"; 
    }
 }






