// Word order reverser in nodejs
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
var output = "";

// 
// Main program
// 
rl.question("Please input something\n> ", (input) => {

    // Split the input into char array
    input = input.split(" ");

    // Loop through all strings
    for (let i = 0; i <= input.length; i++) {

        // Get current char
        const word = input[i];
        output = word + " " + output;

        // If last run
        if (i == input.length - 1) {

            // Log output
            console.log(output);

            // Exit process
            process.exit();
        }

    }

});