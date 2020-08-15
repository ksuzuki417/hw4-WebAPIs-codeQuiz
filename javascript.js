var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container")

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    questionContainerEl.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer () {
    
}

var questions = [
{
    question: "What is 2 + 2",
    answers: [
        {text: "4", correct: true },
        {text: "22", correct: false}
    ]
}

]