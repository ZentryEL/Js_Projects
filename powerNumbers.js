const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function power(base, exponent) {
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
}

rl.question("Enter base number: ", (baseInput) => {
    rl.question("Enter exponent: ", (expInput) => {
        const base = Number(baseInput);
        const exponent = Number(expInput);

        const result = power(base, exponent);
        console.log(`Result: ${result}`);

        rl.close();
    });
});