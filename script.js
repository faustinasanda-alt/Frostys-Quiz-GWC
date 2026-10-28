var lotionScore = 0;
var deodorantScore = 0;
var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a1 = document.getElementById("q2a1");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");



q1a1.addEventListener("click", deodorant);
q1a2.addEventListener("click", lotion);

q2a1.addEventListener("click", deodorant);
q2a2.addEventListener("click", lotion);

q3a1.addEventListener("click", deodorant);
q3a2.addEventListener("click", lotion);

function deodorant() {
  deodorantScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " deodorantScore = " + deodorantScore);
  if (questionCount == 3) {
  console.log("the is done");
  updateResult();
}}


function lotion() {
  lotionScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " lotionScore = " + lotionScore);
  if (questionCount == 3) {
    
    console.log("the is done");

  updateResult();
}}


function updateResult() {
  if (lotionScore >= 2) {
    result.innerHTML = "You are a Lotion person!";
    console.log("you are a lotion person!");
  }else if (deodorantScore >= 2) {
  result.innerHTML = "You are a Deodorant person!";
  console.log("you are a deodorant person!");
  }
}



