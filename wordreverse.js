// Stringreverser in nodejs
// Inspiration: https://wiki.c2.com/?ProgrammingChallengesForInterview - Challenge 1
// © CuzImBisonratte 2022

// 
// Modules
// 
const fs = require("fs");
const readline = require("readline");

// Create the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 
// Program variables
// 
var words = "";
var chars;
var edited_word = "";
var edited_string = "";
var char = "";
var output = "";

// 
// Main program
// 
rl.question("Please input something\n> ", (input) => {

    // Split the input into char array
    words = input.split(" ");

    // Loop through all words
    for (let i = 0; i <= words.length - 1; i++) {

        // Get current word
        const current_word = words[i];

        // Reset edited word value
        edited_word = "";

        // Split the word into chars
        chars = current_word.split("");

        // Loop through all chars
        for (let j = 0; j <= chars.length - 1; j++) {

            // Get current char
            char = chars[j];

            edited_word = char + edited_word;
        }

        // If last run
        if (i == words.length - 1) {

            // Add the edited word and trim the white space
            edited_string = (edited_string + " " + edited_word).trim();

            // Log output
            console.log(edited_string);

            // Exit process
            process.exit();
        }

        // Add it to the edited string
        edited_string = edited_string + " " + edited_word;
    }

});