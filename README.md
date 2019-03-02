# Word_Guess_Game-Shogun_Assassin

##Input

know when user presses key
OnkeyUp event

##DISPLAY
###"press any key to get started"
function/method to listen for key press to start game. Calls other functions
if event.key then start all the other functions
###"Wins # of times user guessed the word correctly."
Key press must match the letter of the stored words in array or other code
should be average number of letters for total of words chosen
###"Display number of guesses remaining"
Set a parameter for number of key presses allowed before player loses
if statement and or loop to count down number of key presses
loop that subtracts from total number of chances? Then moves to new word stored in the WORDS array
###"Display letters the use has guessed"
print/create content in the DOM logging the keys pressed.
Tom went over how to log what keys where pressed in the console us that and inject into the html document
###"After the user wins/loses the game should automatically choose another word and make the user play it.
if user guesses the word the game cycles to a new stored word in an array
if the user goes over the allowed number of wrong guesses then the game cycles to a new word

#class pseudo code

##function objectives functions to create
*OnkeyUp to start the game
*OnKeyUp
*key.event to subtract from number of guesses allowed
*Focus on one game word at a time. Random generate from "game words" array

##functions brainstorm
.toLowerCase()
.includes()
.text-content
.innerHTML
.push[] empty array
find function to create custom attribute to add an image for correct guess completion of the word

##number of guesses = 10
computer

_Arrays_
-game words
*for loop that randomly selects the game word for the round
*for loop to match user input against
-letters guessed
-guesses left 9
-empty array

#HTML pseudo code
*logo hero/title section
-image logo that is Shogun Assassin related
*div to show remaining guesses
*div to show letters that where guessed wrong
*div to show letters guessed right
\*div to display the wins

#Game Functionality Step By Step
*OnkeyUp to start the game
*OnKeyUp if else statement. if matches one letter in game word populates in correct space. if else subtract from remaining
*key.event to subtract from number of guesses allowed
*Focus on one game word at a time. Random generate from "game words" array
