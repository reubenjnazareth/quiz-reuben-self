var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to do you know Reuben ");

//play function

function play (question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log("RIGHT!!");
    score ++;
    
  } else {
    console.log("WRONG!!");
  }

  console.log("current score", score);
}



var questions = [
  {question: "Where do I live? ",
  answer: "bastora"}, 
  {question: "What is my surname? ",
  answer: "nazareth"}, 
  {question: "What is the brand of my phone? ", answer: "samsung"}, 
  {question: "What is my instagram name? " ,
   answer: "reubennazareth"},
  {question: "Do I have a pet dog? ", answer: "no"},
  {question: "Do I like tea or coffee or both? ", answer: "both"}
  ];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  console.log("_______________");
}

var highScores = [
  {name: "Wade", score: 5}];

console.log("Your FINAL SCORE: ", score);

for (var i = 0; i < highScores.length; i++) {
  if (score >= highScores[i].score) {
    console.log("CONGRATS! You have beaten the high score.\nPlease send a screenshot of your final score via whatsaap. Thank you!");
    break;
  } else { break;
    }
  }
  console.log("HIGHEST SCORES ARE ");
    for (var i = 0; i < highScores.length; i++)
    {
    console.log(highScores[i].name + ": " +  highScores[i].score)}

