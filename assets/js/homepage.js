// variables
var timeCounter = 0;
var countdown = null;
var bodyContainerEl = document.getElementById("body");
// bodyContainerEl.addEventListener("click", clickAction);
// var startContainer = document.getElementById("start");
var startBtn = document.getElementById("start-btn");
var quizContainer = document.getElementById("quiz");
var answerContainer = document.getElementById("choices");
var finalScreenContainer = document.getElementById("finalScreen");
// var time = 75;
var timerEl = document.getElementById("timer");
var timer;
var scoreContainer = document.getElementById("finalScore");
var highScores = [];
var inQuiz = false;
var submitBtn = document.getElementById("submit-btn");
var restartBtn = document.getElementById("restart-btn");
var questionIndex = 0;
var nameInput = document.getElementById("initials");

getSavedScores();
runQuiz();

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

// quiz rules
function quizRules() {
  var contentHolderEl = createContentHolder();
  
  var headingEl = document.createElement("h1");
  headingEl.innerText = "JavaScript Quiz";
  headingEl.className = "rule-text";
  
  var rule1El = document.createElement("p");
  rule1El.innerText = "Are you ready for our quiz?";
  rule1El.className = "rule-text";
  
  var rule2El = document.createElement("p");
  rule2El.innerText = "You have just 1 minute to answer 5 questions.";
  rule2El.className = "rule-text";
  
  var rule3El = document.createElement("p");
  rule3El.innerText = "You loose 10 seconds for each wrong answer.";
  rule3El.className = "rule-text";
  
  var rule4El = document.createElement("p");
  rule4El.innerText = "Good luck!";
  rule4El.className = "rule-text";
  
  var buttonContainerEl = document.createElement("p");
  buttonContainerEl.className = "rule-text";
  
  var startQuizButtonEl = document.createElement("button");
  startQuizButtonEl.innerText = "Start Quiz";
  startQuizButtonEl.className = "start-quiz";
  
  buttonContainerEl.appendChild(startQuizButtonEl);
  
  contentHolderEl.appendChild(headingEl);
  contentHolderEl.appendChild(rule1El);
  contentHolderEl.appendChild(rule2El);
  contentHolderEl.appendChild(rule3El);
  contentHolderEl.appendChild(rule4El);
  contentHolderEl.appendChild(buttonContainerEl);
  
  contentContainerEl.appendChild(contentHolderEl);
}


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

// Save score
function saveScore() {
  var saveScores = JSON.stringify(highScores);
    window.localStorage.setItem("finalScore", saveScores);
    console.log(saveScores);
}

// insert name in high score
function showScore() {
  var quizContainerEl = document.getElementById("quiz");
  
  if (quizContainerEl) {
    var nameInputEl = getElementById("initials");
    if (nameInputEl) {
      var input =  document.querySelector("nameInput").value;
      if (input) {
        clearContainer();
        var tempScores = [];

        var currScore = {
            initials: input,
            score: timeCounter
        }
      }
    }
  }

  //get value of initals user inputs
  document.querySelector("nameInput").value;

 //check for scores in local storage or return an empty array and save as a score array variable
  // if (saveScore !==null) {
  //   saveScore = 
  // }
 //format the time and intials in an object
 var saveScores = JSON.stringify(highScores);
 var 


 //push the new score into the score array variable

 //save that new score in local storage


// run the quiz


startBtn.addEventListener("click", runQuiz);
console.log(" start btn funciona")
// show results on submit
submitBtn.addEventListener("click", showScore);

runQuiz();
