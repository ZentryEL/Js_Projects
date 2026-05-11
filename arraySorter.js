// sortStrings.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter strings separated by commas: ", (input) => {
    // Convert input string into array
    let arr = input.split(',').map(str => str.trim());

    // Sort lexicographically
    arr.sort();

    console.log("Sorted array:");
    console.log(arr);

    rl.close();
});