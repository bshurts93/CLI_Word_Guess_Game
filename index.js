var Word = require("./word");
var inquirer = require("inquirer");


var wordsArr = ["One", "Two", "Three"];
var currentWord;

function newWord() {
    currentWord = new Word("test");
    currentWord.arrGet();
}

function guessLetter() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter",
            name: "guess"
        }
    ]).then(function (answer) {


        currentWord.guess(answer.guess);

        console.log(currentWord.string() + "\r\n\r\n");

        guessLetter();
    });
}

newWord();
guessLetter();


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