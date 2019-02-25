

//declares all variables

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
//Makes an empty array
var guessesSoFar = [];
let guessCount = 1;
//gets the Id from html and sets them into an easier way of typing it in into variables 
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text")
var guessesLeftText = document.getElementById("guessesLeft-text");

//does event on keypress up and takes in answer and sets it to var userGuess
document.onkeyup = function (event) {
    var userGuess = event.key;
    //makes computerGuess a random choice. Sets computerChoice to computerGuess
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Conditional to check if userGuess is the same and computerGuess
//when condition is met it makes win go up by one and guesses to 9 and leaves empty array to no guess
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
    }
    //if not the same then minus a guess and push the letter into an array
    if (userGuess != computerChoices) {
        guessesLeft--;
        guessesSoFar.push(userGuess);
    }

//if guesses gets down to 0 then it restarts

    if (guessesLeft === 0) {
        guessesLeft = 9;
        losses++;
        guessesSoFar = [];
    }

//prints out answers of variables to screen
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessesSoFarText.textContent = "Guesses so far: " + guessesSoFar.join(", ") ;

  


};
