var quizContainer = document.getElementById("quiz");
var scoreContainer = document.getElementById("display-score");
var submitBtn = document.getElementById("submit-btn");

// questions function
function runQuiz(){}

// question function
var questionsQuiz = [
 {
  question: "What's JavaScript?",
  answers: {
   a: "It's a rule-based language for styling pages",
   b: "It's a scripting language",
   c: "It's the standar markup language for web pages",
   d: "It's a function on Python",
  },
  correctAnswer: "b"
 },
 {
  question: "Who invented JavaScript?",
  answers: {
    a: "Douglas Crockford",
    b: "Bill Gates",
    c: "Sheryl Sandberg",
    d: "Brendan Eich",
  },
  correctAnswer: "c"
 },
];

// high score function
function showScore() {}


// run the quiz
runQuiz();

// show results on submit
submitBtn.addEventListener('click', showScore);