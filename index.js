var Word = require("./word");
var inquirer = require("inquirer");


var wordsArr = ["one", "two", "three", "four", "five"];
var currentWord;

function newWord() {
    currentWord = new Word(wordsArr[(Math.floor(Math.random() * wordsArr.length))]);
    currentWord.arrGet();
    console.log(currentWord.string());
}


function guessLetter() {
    if (currentWord.string().indexOf("_") === -1) {
        console.log("---------------");
        console.log("YOU WIN!!!");
        console.log("---------------");

        console.log("\r\n\r\n");
        console.log("New word:");
        console.log("---------------");
        newWord();
    }

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


