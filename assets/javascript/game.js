

//makes all variables
//
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
let guessCount = 1;
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text")
var guessesLeftText = document.getElementById("guessesLeft-text");


document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
    }
    if (userGuess != computerChoices) {
        guessesLeft--;
        guessesSoFar.push(userGuess);
    }



    if (guessesLeft === 0) {
        guessesLeft = 9;
        losses++;
        guessesSoFar = [];
    }


    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessesSoFarText.textContent = "Guesses so far: " + guessesSoFar.join(", ") ;

  


};
