// =============================================================================
// Some example variables to get you started. The first three are the elements
// in the index.html file. The last is for storing the computer's number. You
// can see how they are being used below. I recommend keeping these as they are.
// You may want to add more.
// =============================================================================

var msgDisplayEl = document.getElementById('msgDisplay');
var userInputEl = document.getElementById('userInput');
var submitBtnEl = document.getElementById('submitBtn');
var number = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

// =============================================================================
// Some example functions, to get you started. You can change, delete, add to
// these however you like!
// =============================================================================


function clearInput() {
  userInputEl.value = '';
};

// =============================================================================
// The guessing game. Everytime the user clicks the button on the page, this
// function will run. Don't change the name of it unless you change the
// corresponding name of the function in the html doc. There's really no reason
// to do that.
// You can see that the guessingGame function is receiving userInput. If you're
// feeling overwhelmed, you can just trust that that is always true for this
// program, but I promise it's not magical. Go look around at the index.html
// file if you want to try and figure out how that's happnening.
// Change any and all of this code (except the name and the parameter)! Good
// Luck!
// =============================================================================

function guessingGame(userInput) {

  if (userInput == number) {
    msgDisplayEl.innerHTML = "CONGRATS! You guessed the correct number. Play again below.";
    msgDisplay.style.color = "#77e180";
    clearInput();
    submitBtnEl.value = "Play Again";
  } else if (userInput < number) {
    msgDisplayEl.innerHTML = "Wrong! Please guess a HIGHER NUMBER.";
    msgDisplay.style.color = "#e0301e";
  } else if (userInput > number) {
    msgDisplayEl.innerHTML = "Wrong! Please guess a LOWER NUMBER."
    msgDisplay.style.color = "#e0301e";
  }


  //   if (submitBtnEl.value === "Start") {
  //     number = generateNumber();
  //     submitBtnEl.value = "Submit"
  //   }
  //   msgDisplayEl.innerHTML = "Please guess the number 5"
  // } else if (userInput === "5") {
  //   msgDisplayEl.innerHTML = "You guessed it! Great job!"
  //   clearInput();
  //   submitBtnEl.value = "Play Again"
  // }

}