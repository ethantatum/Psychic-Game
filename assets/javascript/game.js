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

