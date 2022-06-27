var timeEl = document.querySelector(".time");
var beginGame = document.querySelector("#start");
var secondsLeft = 30;
var questions = [
    {
    q1: "commonly used data types do not include:",
    options1: ["strings", "boolean","alerts", "numbers"],
    answer1: options1[2],
  }, {
      q2: "html syntax include:",
      option2: ["h1 tag","bananas", "h2 tag", "form"],
  
  } ];
console.log(questions);

questions[0].q1
 if (answer=== questions[0].answer1) {
    alert("correct")
 }else {
    alert("incorrect")
    timer = timer-10;
 }
 beginGame.addEventListener("click",function() {

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
  