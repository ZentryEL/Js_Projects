const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the length: ", (length) => {
    rl.question("Enter the width: ", (width) => {

        length = parseFloat(length);
        width = parseFloat(width);

        const area = length * width;

        console.log("Area of rectangle:", area);

        rl.close();
    });
});