// ZentryEL's first project all be it almost carreid by auto completion
// Number Guessing Game in JavaScript

//Declarations
let randomNumber = Math.floor(Math.random () * 100) + 1; // generates a random number between 1 and 100
let attempts = 0; // will be set based on difficulty level, but for now it's initialized to 0
/*
lines 10-14 makes the game more interactive by allowing users to have inputs
*/ 
const readline = require('readline');
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
Function guessNumber checks the user's input against the random number generated
*/
function guessNumber (userGuess) {
    if (userGuess === randomNumber ) {
        return 'Congratulations! You guessed the number in ' + attempts + ' attempts.';
    }
    else if (userGuess < randomNumber) {
        return 'Higher! Try again';
    }
    else {
        return 'Lower! Try again';
    }
}
/*Function difficultyLevel sets the number of guesses the user will be given */
function difficultyLevel (level) {
    if (level === '1') {
        attempts = 10;
    }
    else if (level === '2') {
        attempts = 5;
    }
    else if (level === '3') {
        attempts = 3;
    }
    else {
        return 'Invalid difficulty level. Please choose 1, 2, or 3.';
    }
}
/*The main game loop*/
console.log("Welcome to the Number Guessing Game!\n" +
    "I'm thinking of a number between 1 and 100. \n" +
    "Choose a difficulty level: 1, 2, or 3.\n" +
    "Please select a difficulty level to start the game.\n"+
    "1. Easy (10 attempts)\n" +
    "2. Medium (5 attempts)\n" +
    "3. Hard (3 attempts)");

readLine.question ('Enter your difficulty level: ', (level) => {
    difficultyLevel(level);
    console.log('You have ' + attempts + ' attempts to guess the number.');
    function makeGuess () {
        if (attempts > 0) {
            readLine.question('Enter your guess: ', (userGuess) => {
                attempts--;
                const result = guessNumber(Number(userGuess));
                console.log(result);
                if (result.startsWith('Congratulations')) {
                    readLine.close();
                } else {
                    makeGuess();
                }
            });
        } else {
            console.log('Game over! The number was ' + randomNumber + '.');
            readLine.close();
        }
    }
    makeGuess();
});