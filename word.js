var Letter = require("./letter");

var test = new Letter("A", true);



console.log(test);


function Word(arr) {
    this.arr = arr;
    this.string = function () {
        // Returns a string representing the word
    };
    this.guess = function (char) {
        // Calls guess function from Letter object
    };
}