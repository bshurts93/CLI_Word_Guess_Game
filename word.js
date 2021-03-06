var Letter = require("./letter");


module.exports = function Word(str) {
    this.lettersArr = [];
    this.arrGet = function () {
        // Create an arr of Letter objects for each letter of the array provided
        str.split("").forEach(element => {
            var letterObj = new Letter(element);
            this.lettersArr.push(letterObj);
        });
    }
    this.string = function () {
        var str = [];

        // Calls function in Letter obj "reveal" that displays either char or underscore
        for (var i = 0; i < this.lettersArr.length; i++) {
            str.push(this.lettersArr[i].reveal());
        }
        // Returns a string representing the word
        return str.join(" ");
    };
    this.guess = function (char) {
        // Calls guess function from Letter object
        this.lettersArr.forEach(element => {
            element.check(char);
        });
    };
}


// TESTING 
// var test = new Word("test");

// test.arrGet();
// console.log(test.lettersArr);
// console.log(test.string());
// test.guess("t");
// console.log("\r\n\r\n---------------------------------\r\n\r\n");
// console.log(test.lettersArr);
// console.log(test.string());
// test.guess("e");
// console.log("\r\n\r\n---------------------------------\r\n\r\n");
// console.log(test.lettersArr);
// console.log(test.string());


