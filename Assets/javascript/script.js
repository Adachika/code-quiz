// Declare variables
var timeEl = document.querySelector(".time");
var start = document.querySelector("#start");
var question = document.querySelector("#question");
var quiz = document.querySelector("#quiz");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var timeLeft = 60;
var correct = 0;
var incorrect = 0;
var currentIndex = 0;

// Use an array to create a question bank. Each question is an object within the array
var questions = [
    {        
    ask: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans","alerts", "numbers"],
    answer: 'option3'
  },
  {
    ask: "Script tags go in:___",
    options: ["title", "css","div", "body"],
    answer: 'option4'
  },
  {
    ask: "The condition in an if / else statement is enclosed within ____.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: 'option3'
  },
  {
    ask: "Arrrays in Javascript can be used to store ___.",
    options: ["numbers and strings","other arrays","booleans","all of the above"],
    answer: 'option4'
  },
  {
    ask: "String values must be enclosed within ___ when being assigned to variables. ",
    options: ["commas","curly brackets","quotes","parentheses"],
    answer: 'option3'
  },
  {
    ask: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["Javascript","terminal/bash","for loops","console.log"],
    answer: "option4"
  }

];

 // Function to set the countdown timer
 function setTime() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = timeLeft + "s";
  
      if(timeLeft === 0 || currentIndex === questions.length) {
        clearInterval(timerInterval);
        timeEl.textContent = "";
        alert("All done");
        results();
      }
      //The second argument that the setInterval() method takes is the interval. Because intervals use milliseconds, we use 1000 to create an interval of one second
    }, 1000);
  }
  
  // Function to display questions

function showQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var c = questions[currentIndex].options;
        var q = questions[currentIndex].ask;
        option1.innerHTML = c[0];
        option2.innerHTML = c[1];
        option3.innerHTML = c[2];
        option4.innerHTML = c[3];
        question.innerHTML = q;
    }
}
 
// Function to check the answer
function checkAnswer(answer) {
    if (questions[currentIndex].answer == answer) {
        alert("correct");
        correct++;
        nextQuestion();
    }
    else {
        alert("incorrect");
        incorrect++;
        timeLeft = timeLeft - 10;
        nextQuestion();
    }
}
 
// Function to display the next question
function nextQuestion(){
    currentIndex++;
    showQuestions();
    
}

// Function to display the results
function results(){
    var score = parseInt(correct) + parseInt(timeLeft);
    question.innerHTML = "Final score: " + score;
    question.style.fontSize = "30px";
    quiz.innerHTML = "correct: " + correct + " " + "incorrect: " + incorrect + " ";
    quiz.style.fontSize = "20px";
    quiz.style.color = "sienna";

    var submitBtn = document.createElement("button");
    submitBtn.innerHTML = "Submit";
    quiz.append(submitBtn);

    var initialsInput = document.createElement("input");
    initialsInput.setAttribute("type","text");
    initialsInput.setAttribute("value","Enter your initials");
    initialsInput.style.margin = "10px";
    quiz.append(initialsInput);

    submitBtn.addEventListener("click", function (event) {
      event.preventDefault();

    var highScore = JSON.parse(localStorage.getItem('highscore')) || [];
    var userScore = {name: initialsInput.value, score: score };
    highScore.length <= 5 && highScore.push(userScore);

    if (highScore.length >= 5){
       for (let i = 0; i < highScore.length; i++){
        if (highScore[i].score < userScore.score){
          highScore.splice(i, 1, userScore);
          break;
        }
      }
     }
    localStorage.setItem('highscore', JSON.stringify(highScore));
    highScore.map(i => {
        if (highScore.length > 5){
              highScore.splice(5);
        }
        var li = document.createElement("li");
        li.innerHTML = i.name + " " + i.score;
        return quiz.append(li);
      }) 
      initialsInput.style.visibility = "hidden";
      submitBtn.style.visibility = "hidden";
      timeEl.innerHTML = "";
      
    });
}
  
start.addEventListener("click",function() {
    setTime();
    showQuestions();
    start.getElementsByClassName.display = "none";
})
