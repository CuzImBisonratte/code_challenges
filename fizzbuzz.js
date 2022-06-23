// Fizzbuzz in nodejs
// Inspiration & Motivation: https://youtu.be/QPZ0pIK_wsc
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
// Main program
// 
rl.question("Generate fizzbuzz from 0 to ...\n> ", (fizzbuzz) => {

    // Loop from 0 to ?{fizzbuzz}
    for (let i = 1; i <= parseInt(fizzbuzz); i++) {

        // Check if i is multiple of 3 AND 5
        if (i % 3 == 0 && i % 5 == 0) {

            // Log the number
            console.log("FIZZBUZZ");

        }

        // Check if i is multiple of 3
        else if (i % 3 == 0) {

            // Log "Fizz" in red
            console.log("FIZZ");
        }

        // Check if i is multiple of 5
        else if (i % 5 == 0) {

            // Log "Fizz" in blue
            console.log("BUZZ");
        }

        // Number not % 3 or 5
        else {

            // Just log the number
            console.log(i);
        }
    }

    // Exit the program
    process.exit();
});