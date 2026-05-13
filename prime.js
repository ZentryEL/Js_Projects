// Program to find the sum of all prime numbers within a given range

const prompt = require("prompt-sync")();

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// User input
let start = parseInt(prompt("Enter the starting number: "));
let end = parseInt(prompt("Enter the ending number: "));

let sum = 0;

// Find and add prime numbers
for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
        sum += i;
    }
}

console.log(`The sum of all prime numbers between ${start} and ${end} is: ${sum}`);