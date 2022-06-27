// Declare variables

var timeEl = document.querySelector(".time");
var start = document.querySelector("#start");
var highScore = document.querySelector(".highscore");
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
    options: ["commas","curly brackets","quotes","paraentheses"],
    answer: 'option3'
  },
  {
    ask: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["Javascript","terminal/bash","for loops","console.log"],
    answer: "option4"
  }

];

 start.addEventListener("click",function() {

 }
 )
 /*function setTime() {
    // Sets interval in variable
    //The setInterval() method takes a function as its first argument
    var timerInterval = setInterval(function() {
      //The function is the action that we want to be evaluated at each interval. This function prints a message at each interval
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        //When the countdown reaches zero, we want the action to stop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
      //The second argument that the setInterval() method takes is the interval. Because intervals use milliseconds, we use 1000 to create an interval of one second
    }, 1000);
  }
  
  // Function to create and append colorsplosion image
  //We call sendMessage() after the interval is cleared, so the image will pop up after the countdown is complete. The sendMessage function creates and appends the image to the document
  function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
    
  
  }
  
  setTime();*/
  