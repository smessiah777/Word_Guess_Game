window.onload = function() {
  var gameWords = ["lone wolf", "cub", "the shogun", "lord bizen"];

  var wrong; //letters guessed
  var rightLetters; //letters guessed correctly that match game words
  var score; // games won words guessed correctly
  var guessesLeft; //guesses remaining
  var gameImg; //main image and winning game image

  //Generate Random Game Words from Array
  //game words randomly selected
  var wordSelect = "";
  wordSelect = gameWords[Math.floor(Math.random() * gameWords.length)];

  var letters = [];

  //populate empty array
  var letters = gameWords.split("");

  // get elements
};
