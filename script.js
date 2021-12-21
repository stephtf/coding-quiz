
// part 1 - starting the game 

var startButton = document.getElementById("start-button") 
var startTitle = document.querySelector("h1")
var startPara = document.querySelector("p")

function disappear() {
    startButton.style.display = "none";  
    startTitle.style.display = "none";
    startPara.style.display = "none";
}

startButton.addEventListener("click", disappear);


// part 2 - questions 

