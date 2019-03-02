window.onload = function() {
  var gameWords = [
    "lone wolf",
    "cub",
    "the shogun",
    "lord bizen",
    "the supreme ninja"
  ];

  var wrong = []; //letters guessed wrong
  var rightLetters = 0; //letters guessed correctly that match game words
  var score = 0; // games won words guessed correctly
  var guessesLeft = 10; //guesses allowed guesses remaining
  var gameImg; //main image and winning game image
  var dash = 0; // for spaces in words

  // get elements
  var displayRight = document.getElementById("correct-letter");
  var displayWrong = document.getElementById("incorrect-letter");
  var displayGuessesLeft = document.getElementById("guesses-remaining");
  var displayScore = document.getElementById("score");
  var displayImg = document.getElementById("game-img");

  ///Game Start
  document.getElementById("start").addEventListener("click", wordSelect);

  //Display Guesses Left
  function livesLeft() {
    displayGuessesLeft.innerHTML = guessesLeft;
    if (guessesLeft < 1) {
      displayGuessesLeft.innerHTML = "You Lose! The Shogun Lives!";
    }
    for (var i = 0; i < wrong.length; i++) {
      if (rightLetters === wrong.length) {
        displayGuessesLeft.innerHTML = "You Win! The Shogun is Slain!";
      }
    }
  }

  livesLeft();

  //Generate Random Game Words from Array
  //game words randomly selected
  function wordSelect() {
    var currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    console.log(currentWord);
  }

  //match key input against gameWords array for right guesses
  document.onkeyup = function(event) {
    console.log(event.key);
  };
};
