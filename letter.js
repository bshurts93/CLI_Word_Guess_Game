module.exports = function Letter(char, bool) {
    this.char = char;
    this.bool = bool;
    this.check = function (guess) {
        if (guess === this.char) {
            this.bool = true;
        }
    }
    this.reveal = function () {
        // Reveal the letter it was guessed
    }
}
