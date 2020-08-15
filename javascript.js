//HTML DOM variables
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question-container")
var answerButtonsEl = document.getElementById("answer-button");

// keep track of current question index
var currentQIndex = 0;
var timerSecs = 90;

//Start game
startButton.addEventListener("click", startGame);

//Start the timer

//start the quizz
function startGame() {
    console.log("started");
    startButton.classList.add("hide");
    currentQ = questions;
    currentQIndex = 0;
    questionContainerEl.classList.remove("hide");
    setNextQuestion();
}

//setting next question
function setNextQuestion() {
    showQuestion(currentQ[currentQIndex]);

}

function showQuestion(quesiton) {
    questionEl.innerText = question.question
}
//answer function
function selectAnswer () {
    
}

//quesitons variable
var questions = [
{
    question: "What is 2 + 2",
    answers: [
        {text: "4", correct: true },
        {text: "22", correct: false}
    ]
}

]

// handle user answer click
    // if answer was correct, then display "correct message"
    // if answer was correct, then go to next question
    // if answer was incorrect, then subtract 10 seconds from timer