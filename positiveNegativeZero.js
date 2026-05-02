// create a function where it checks if the input is negative, positive or negative
const readline = require('readline');
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
  return new Promise(resolve => readLine.question(question, resolve));
}

async function main() {
    while (true) {
        console.log("\n=== Number Checker ===");

        const input = await ask("Give me a number: ");
        const number = parseFloat(input);

        if (isNaN(number)) {
            console.log("Invalid input. Enter a valid number.");
            continue;
        }

        if (number === 0) {
            console.log("Your number is zero");
        } else if (number > 0) {
            console.log("Your number is positive");
        } else {
            console.log("Your number is negative");
        }
    }
}

main();