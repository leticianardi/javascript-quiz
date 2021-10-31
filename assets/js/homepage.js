// variables for JS
var startContainer = document.getElementById("start");
var startBtn = document.getElementById("start-btn");
var quizContainer = document.getElementById("quiz");
var answerContainer = document.getElementById("choices");
var finalScreenContainer = document.getElementById("finalScreen");
var time = 75;
var timerEl = document.getElementById("timer");
var timer;
var scoreContainer = document.getElementById("finalScore");
var submitBtn = document.getElementById("submit-btn");
var restartBtn = document.getElementById("restart-btn");
var questionIndex = 0;
var nameInput = document.getElementById("initials");

// question function
var questionsQuiz = [
  {
    question: "What's JavaScript?",
    answers: [
      "It's a rule-based language for styling pages",
      "It's a scripting language",
      "It's the standar markup language for web pages",
      "It's a function on Python",
    ],
    correctAnswer: "It's a scripting language",
  },
  {
    question: "Who invented JavaScript?",
    answers: [
      "Douglas Crockford",
      "Bill Gates",
      "Sheryl Sandberg",
      "Brendan Eich",
    ],
    correctAnswer: "Sheryl Sandberg",
  },
];

// questions function
function runQuiz() {
  //hide the start container
  startContainer.setAttribute("class", "hide");
  //show the question
  quizContainer.removeAttribute("class");
  //start the timer
  timer = setInterval(function () {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
      endGame();
    }
  }, 1000);

  //show the time on the screen

  timerEl.textContent = time;

  //get first question
  askQ();
}

function askQ() {
  //get the current question in the array by its index
  var currentQ = questionsQuiz[questionIndex];

  //show the quesion from the currentQ object
  var questionTitle = document.getElementById("questTitle");
  questionTitle.textContent = currentQ.question;

  //clear the answer container before the new buttons are added
  answerContainer.innerHTML = ''

  //show the answer options use a loop
  currentQ.answers.forEach(function (choice, i) {
    //create new buttons for each answer choice
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = choice;

    //give the buttons click events
    choiceBtn.onclick = userChoice;

    //append new buttons to answer container
    answerContainer.append(choiceBtn);
  });
}

function userChoice() {
  // message from correct and wrong answer

  //use the event listener "this" tp capture what the user is clicking
  if (this.value !== questionsQuiz[questionIndex].correctAnswer) {
    //deduct 5 secs
    time -= 5;
  }

  timerEl.textContent = time;

  questionIndex++;

  //if we run out of questions, game over; if not, ask the next question
  if (questionIndex === questionsQuiz.length) {
    endQuiz();
  } else {
    askQ();
  }
}

function endQuiz() {
  //stop the timer
  clearInterval(timer);

  //hide the question container
  quizContainer.setAttribute("class", "hide");

  //show the final screen container
  finalScreenContainer.removeAttribute("class");

  //display the final score
  scoreContainer.textContent = time;
}

// high score function
function showScore() {
  // event.preventDefault();

  //get value of initals user inputs
  document.querySelector("nameInput").value;

 //run a check to see if there are any scores in local storage or make it return an empty array and save as a score array variable

 //format the time and intials in an object

 //push the new score into the score array variable

 //save that new score in local storage
}

// run the quiz


startBtn.addEventListener("click", runQuiz);
// show results on submit
submitBtn.addEventListener("click", showScore);
