var Letter = require("./letter.js")

class Word {
    constructor(word){
        this.wordArray = []
        for (var i = 0; i < word.length; i++){
            this.wordArray.push(new Letter(word[i]))
        } 
    }
    string(){
        var newString = []
        for (var i = 0; i < this.wordArray.length; i++){
            var character = this.wordArray[i].display();
            newString.push(character);
        }
        var stringDisplay = newString.join(" ")
        return stringDisplay
    }
    wordGuess(guess){
        for (var i = 0; i < this.wordArray.length; i++){
            this.wordArray[i].playerGuess(guess)
        }
    }
}

module.exports = Word

// var andrew = new Word("andrew");
// console.log(andrew.wordArray);