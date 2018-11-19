// VARIABLES
// =================================
const userGuessesText = document.getElementById("user-guesses");
const guessesLeftText = document.getElementById("guesses-left");
const winsText = document.getElementById("wins");
const lossesText = document.getElementById("losses");

const computerBank = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let userGuesses = [];
let guessesLeft = 3;
let wins = 0;
let losses = 0;

computerGuess = computerBank[Math.floor(Math.random() * computerBank.length)];
console.log(computerGuess);

// FUNCTIONS
// =================================
function newgame() {
    guessesLeft = 3;
    userGuesses = [];
    computerGuess = computerBank[Math.floor(Math.random() * computerBank.length)];
    console.log(computerGuess);
    guessesLeftText.innerHTML = guessesLeft;
    userGuessesText.innerHTML = userGuesses.join(' ');
}

document.onkeyup = function(event) {
    userGuess = event.key;
    if(userGuess == computerGuess) {
        alert("Whoa...you must be psychic!");
        wins++;
        newgame()
    } else if 
        (userGuess >= 1 && userGuess <= 9) {
            userGuesses.push(userGuess);
            userGuessesText.innerHTML = userGuesses.join(' ');
            guessesLeft--;
            if(guessesLeft === 0) {
                alert('Yikes...no psychic here...');
                losses++;
                newgame();
            }
        } else {
        alert("Wow...picking a letter...not a good start! Choose a number!");
    }

    guessesLeftText.innerHTML = guessesLeft;
    winsText.innerHTML = wins;
    lossesText.innerHTML = losses;
}
