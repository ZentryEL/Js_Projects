// ZentryEL's first project all be it almost carreid by auto completion
// Number Guessing Game in JavaScript

//Declarations
let randomNumber = Math.floor(Math.random () * 100) + 1; // generates a random number between 1 and 100
let attempts = 10; // will be set based on difficulty level, but for now it's initialized to 10
let guessesMade = 0; // keeps track of the number of guesses made by the user
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
        return 'Congratulations! You guessed the number in ' + guessesMade + ' attempts.';
    }
    else if (userGuess < randomNumber) {
        console.log('Higher! Try again');
        return 'You have ' + attempts + ' attempts to guess the number.';
    }
    else {
        console.log('Lower! Try again');
        return 'You have ' + attempts + ' attempts to guess the number.';
    }
}
/*Function difficultyLevel sets the number of guesses the user will be given */
function difficultyLevel (level) {
    if (level === '1') return 10;
    if (level === '2') return 5;
    if (level === '3') return 3;

}
/*The main game loop*/
console.log("Welcome to the Number Guessing Game!\n" +
    "I'm thinking of a number between 1 and 100. \n" +
    "Choose a difficulty level: 1, 2, or 3.\n" +
    "Please select a difficulty level to start the game.\n"+
    "1. Easy (10 attempts)\n" +
    "2. Medium (5 attempts)\n" +
    "3. Hard (3 attempts)");

readLine.question ('Enter your difficulty level: ', function handleDifficulty (level){
    if (level !== '1' && level !== '2' && level !== '3') {
        console.log('Invalid difficulty level. Please choose 1, 2, or 3.');
        return readLine.question('Enter your difficulty level: ', handleDifficulty); // Recursively call the function until a valid input is received
    }
    attempts = difficultyLevel(level);
    console.log('You have ' + attempts + ' attempts to guess the number.');
    function makeGuess () {
        if (attempts > 0) {
            readLine.question('Enter your guess: ', (userGuess) => {
                const guess = Number(userGuess);
                if (isNaN (guess)) {
                console.log ('Give me a letter nigga');
                 return makeGuess();
                 }
                 if (guess < 1 || guess > 100) {
                    console.log ("Ur our of range nigga!");
                    return makeGuess();
                 }
                attempts--;
                guessesMade++;
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