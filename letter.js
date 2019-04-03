module.exports = function Letter(char) {
    this.char = char;
    this.bool = false;

    this.reveal = function () {
        // Reveal the letter it was guessed
        if (this.bool === true) {
            return this.char;
        } else {
            return "_";
        }
    }
    this.check = function (guess) {
        if (guess === this.char) {
            this.bool = true;
            console.log("TRUE!");
        }
    }
}

