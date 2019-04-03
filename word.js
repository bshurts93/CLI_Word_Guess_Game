var Letter = require("./letter");


function Word() {
    this.arr = function (letters) {
        var objArr = [];
        // Create an arr of Letter objects for each letter of the array provided
        letters.forEach(element => {
            var letterObj = new Letter(element);
            objArr.push(letterObj);
        });
        return objArr;
    }
    this.string = function () {
        // Returns a string representing the word

        // Calls function in Letter obj "reveal" that displays either char or underscore
    };
    this.guess = function (char) {
        // Calls guess function from Letter object
    };
}


var test = new Word();
var testArr = "balls"


console.log(test.arr(testArr.split(""))); 