//Define instance variables
let onLoadTime = '';
let onClickTime = '';
let start = ''; //Used when game starts and user clicked too early, to reset the clock

//On Click Function: Click when the color changes, record the time stamp, minus the itinial loading time stamp, and show the result by an alert.
function clickWhenColorChange() {
  onClickTime = new Date().getTime(); //Get the time stamp in ms on user click
  const result = (onClickTime - onLoadTime) / 1000; //Store the difference between time stamp on user click and time stamp on initial loading into a variable
  alert(`Your result is: ${result}s`); //Show the result by an alert
  window.removeEventListener('click', clickWhenColorChange); //Remove the click event listener
  gameEnd();
}

//Change Color Function: Change the background color and listen to the click event
function colorChange() {
  window.removeEventListener('click', tooEarly); //Remove the "clicked too early" event listener
  onLoadTime = new Date().getTime(); //Record the time stamp on initial loading
  document.querySelector('body').classList.add('body_change'); //Change the background color
  window.addEventListener('click', clickWhenColorChange); //Listen to the click event
}

//Clicked Too Early Function:
function tooEarly() {
  clearTimeout(start); //Clear previously set Timeout
  alert('Clicked Too Early');
  window.removeEventListener('click', tooEarly); //Remove the "clicked too early" event listener
  gameEnd();
}

//Random Time Function: Set a random time between 1 - 3 seconds before color changes
function randomTime() {
  return (Math.random() * 2 + 1) * 1000;
}

//Start the Game Function: Use this function to start the game cycle (set a timer, wait for click, count the time, etc.)
function gameStart() {
  start = setTimeout(colorChange, randomTime()); //Start the game by setting a Timeout for colorChange and randomTime
  window.addEventListener('click', tooEarly); //Execute the tooEarly function if the user clicked before color changes
}

//Game Over Function: un-hide the "Play again" button for user to restart the game
function gameEnd() {
  document.querySelector('button').classList.remove('btn'); //Remove the hide "Play again" button css to show the button again
  restart();
}

//Restart the Game Function: 
function restart() {
  document.querySelector('button').addEventListener('click', restartButton); //Listen to the button click event again
}

//"Play again" Button Function
function restartButton() {
  location.reload(); //Refresh the browser page to restart the game
}

//Start a new game cycle
gameStart();