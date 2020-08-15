//HTML DOM variables
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question")
var choicesEl = document.getElementById("answerChoices");
var answerButton = document.getElementById("")
var timerEl = document.getElementById("timer");

// keep track of current question index
var increment = 0;
var timerSecs = 90;

// count correct answers
var correct = 0;

//quesitons/answers variables
var questions = [
    {
        question: "What does js stand for?",
        answers: ["just stay", "just smart", "javascript", "joy script"],
        correctAnswer: "javascript"
    },
    {
        question: "Which HTML element is correct for JavaScript?",
        answers: ["<script>", "<js>", "<javascript>", "<java>"],
        correctAnswer: "0"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["<head>", "<body>", "between <head> and <body>", "all 3 places"],
        correctAnswer: "<body>"
    },
    {
        question: "How do you create function in JavaScript?",
        answers: ["function myFunction ()", "function = myFunction", "function(myFunction())", "myFunction() = function"],
        correctAnswer: "function myFunction"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        answers: ["<!--This is a comment", "//This is a comment", ".This is a comment", "<This is a comment>"],
        correctAnswer: "//This is a comment"
    },
    
    ]
    

//Start game
startButton.addEventListener("click", startQuiz);
//startButton.addEventListener("click", startTimer);

//Start the timer - callback function should decrement timer and check for a game
//function startTimer() {
    var timer = setInterval(function(){
        console.log(timerSecs)
        timerSecs--}, 900);
        timerEl.append(timer);
       
//}


    // either timer <= 0 or all questions are answered to end the quiz


//start the quizz
function startQuiz() {
    startButton.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    nextQuestion();
}

//setting next question
function nextQuestion() {
    if (increment === questions.length){
        console.log("quiz complete")
    } else {
        questionEl.textContent = questions[increment].question
        for (var i = 0; i < questions[increment].answers.length; i++) {
            //var answerChoicesEl = document.getElementById(answerChoices)
            //CANNOT show answer choices
            answerChoicesEl.textContent = questions[increment].answers[i]
            //answerChoicesEl.append(choicesEl)

            choicesEl.addEventListener("click", function (e){
                e.preventDefault()
                var answerSelected = this.textContent
                if (answerSelected === questions[increment].correctAnswer) {
                    increment++
                    choicesEl.innerHTML = ""
                    selectAnswer(true)
                    nextQuestion()
                } else {
                    selectAnswer(false)
                    timerlimit = timerlimit - 10;
                }
                
            })
        }
    }
}

setTimeout(function(){
    timerEl.textContent = "Time is Up"
}, 90000)

//answer function
function selectAnswer () {
    //if (answers === correctAnswer)
    
}


// handle user answer click
    // if answer was correct, then display "correct message"
    // if answer was correct, then go to next question
    // if answer was incorrect, then subtract 10 seconds from timer

// function to advance to next question and display/render the question

// function to end the game
function endGame() {
    // stop timer
    clearInterval(countdownInterval);
    // Determine if user won or lost

    // hide question <div> tag
}

// store score in local storage

