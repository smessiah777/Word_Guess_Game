window.onload = function() {
  var gameWords = ["ronin", "cub", "shogun", "bizen", "ninja"]; //core game words

  var wordArray = []; //empty array to populate key inputs
  var rightLetters = 0; //letters guessed correctly that match game words
  var score = 0; // games won words guessed correctly
  var guessesLeft = 10; //guesses allowed guesses remaining
  var gameImg; //main image and winning game image
  var dash = 0; // for spaces in words

  // get elements
  var displayGuessesLeft = document.getElementById("guesses-remaining");
  var statusInfo = document.getElementById("prompt");
  var displayInput = document.getElementById("word-display");
  var displayScore = document.getElementById("score");
  var displayImg = document.getElementById("game-img");

  // Game Start
  document.getElementById("start").addEventListener("click", wordSelect);

  //Display Guesses Left

  displayGuessesLeft.innerHTML = guessesLeft;
  // if (guessesLeft < 1) {
  //   displayGuessesLeft.innerHTML = "You Lose! The Shogun Lives!";
  // }
  // for (var i = 0; i < wrong.length; i++) {
  //   if (rightLetters === wrong.length) {
  //     displayGuessesLeft.innerHTML = "You Win! The Shogun is Slain!";
  //   }
  // }

  //Generate Random Game Words from Array

  //game words randomly selected
  function wordSelect() {
    var currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    ///
    for (var i = 0; i < currentWord.length; i++) {
      wordArray[i] = "_";
    }

    var letters = currentWord.length;

    /////
    displayInput.innerHTML = wordArray;

    // while (letters > 0) {
    //   //  document.getElementById("word-display");
    //   console.log(wordArray.join(" "));

    //   document.onkeyup = function(event) {
    //     displayInput.textContent = event.key;
    //   };

    //   var statusText = (statusInfo.innerHTML =
    //     "GUESS A LETTER WITH YOUR KEYBOARD");
    //   if (displayInput === null) {
    //     break;
    //   } else if (displayInput.length !== 1) {
    //     statusText = statusInfo.innerHTML = "CHOOSE A LETTER";
    //   } else {
    //     for (var j = 0; j < gameWords.length; j++) {
    //       if (word[j] === keyGuess) {
    //         wordArray[j] = displayInput;
    //         letters--;
    //       }
    //     }
    //   }
    // }
  }

  // var letters = wordSelect;

  //array to act as place holder for empty letter spaces

  ///Loop to update the game and show user the necessary info
};
