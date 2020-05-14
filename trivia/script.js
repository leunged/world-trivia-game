var questionElement = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var result = document.getElementById("result");

var score = 0;
var questionIndex = 0;

// Multidimensional array of questions and answers
var questions = [{
        question: "What country has the second largest population in the world?",
        choice1: "India",
        choice2: "China",
        choice3: "Indonesia",
        choice4: "USA",
        answer: "1",
    },
    {
        question: "In what country would you find the cities Glasgow and Edinburgh?",
        choice1: "Ireland",
        choice2: "Scotland",
        choice3: "England",
        choice4: "France",
        answer: "2",
    },
    {
        question: "What country was the first to land a man on the moon?",
        choice1: "Canada",
        choice2: "USA",
        choice3: "Russia",
        choice4: "Germany",
        answer: "2",
    },
    {
        question: "In what country would you find the cities Lyon and Marseille?",
        choice1: "Romania",
        choice2: "Spain",
        choice3: "France",
        choice4: "Portugal",
        answer: "3",
    },
    {
        question: "Mount Fuji is the highest mountain in what country?",
        choice1: "South Korea",
        choice2: "Japan",
        choice3: "China",
        choice4: "Singapore",
        answer: "2",
    },
    {
        question: "In what country is the Great Pyramid of Giza found?",
        choice1: "Egypt",
        choice2: "Libya",
        choice3: "Lebanon",
        choice4: "Saudi Arabia",
        answer: "1",
    },
    {
        question: "In what country is the Yangtze River found?",
        choice1: "Vietnam",
        choice2: "Cambodia",
        choice3: "Taiwan",
        choice4: "China",
        answer: "4",
    },
];

var questionDisplay = document.querySelector(".question");
var choiceDisplay = document.querySelector(".choice");
var startDisplay = document.querySelector(".btn-start");
var nextDisplay = document.querySelector(".btn-next");
var helpDisplay = document.querySelector(".btn-help");
var restart = document.querySelector(".btn-restart");

init();

function init() {
    questionDisplay.style.display = "none";
    choiceDisplay.style.display = "none";
    nextDisplay.style.display = "none";
    result.style.display = "none";
}

startDisplay.addEventListener("click", function() {
    getQuestion(questionIndex);
    startDisplay.style.display = "none";
    questionDisplay.style.display = "block";
    choiceDisplay.style.display = "block";
    nextDisplay.style.display = "block";
});

function getQuestion(index) {
    var q = questions[index];
    questionElement.innerHTML = q.question;
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
}

function nextQuestion() {
    var selectChoice = document.querySelector("input[type=radio]:checked");
    var answer = selectChoice.value;

    if (questions[questionIndex].answer == answer) {
        score++;
    }

    selectChoice.checked = false;
    questionIndex++;

    if (questionIndex == questions.length - 1) {
        next.innerHTML = "Submit";
    }

    if (questionIndex == questions.length) {
        questionDisplay.style.display = "none";
        choiceDisplay.style.display = "none";
        nextDisplay.style.display = "none";
        result.style.display = "block";
        result.innerHTML = "You scored " + score + " out of " + questions.length;
    }

    getQuestion(questionIndex);
}

nextDisplay.addEventListener("click", nextQuestion);

helpDisplay.addEventListener("click", function() {
    alert("Game Instructions: Choose an answer and click the Next button. Click Restart to restart the game. Your score will be displayed in the end.");
});

restart.addEventListener("click", function() {
    window.location.reload();
});
