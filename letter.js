class Letter {
    constructor(letter){
    this.letter = letter,
    this.guessed = false
    }
    display(){
        if (this.guessed === true){
            return this.letter
        }
        else {
            return "_"
        }
    }
    playerGuess(guess){
        if (guess === this.letter){
            this.guessed = true;
        }
    }
}

module.exports = Letter