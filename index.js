let Word = require("./word.js")
let inquirer = require("inquirer")

let options = ["jquery", "bootstrap", "mamp"];
let random = Math.floor(Math.random() * options.length);
let newWord = new Word(options[random]);
let remainingGuesses = 5;

function inquire() {
    var remainingLetters = 0;
    for (var i = 0; i < newWord.wordArray.length; i++){
        if (newWord.wordArray[i].guessed == false){
            remainingLetters++
        }
    }
    console.log(newWord.string());
    var gameState = newWord.string();
    if (remainingLetters > 0 && remainingGuesses > 0){
        console.log(remainingGuesses + " guesses left")
    inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter",
        name: "guess"
    }
]).then(function(response){
    if (response.length > 1 || 0){
        console.log("Please guess a single letter")
    }
    else {
        newWord.wordGuess(response.guess)
    }
    var updatedState = newWord.string();
    if (updatedState == gameState){
        remainingGuesses--
    }
    inquire();
})
    }
    else if (remainingLetters == 0) {
        console.log(newWord.string() + "\nCongratulations");
    }
    else if (remainingGuesses == 0) {
        console.log("Sorry, you lose")
    }
    else {
        console.log("Something went wrong")
    }
}

inquire();