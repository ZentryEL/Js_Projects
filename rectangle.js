const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate area
function calculateArea(length, width) {
    return length * width;
}

// Ask user for input
rl.question("Enter length: ", (length) => {
    rl.question("Enter width: ", (width) => {
        
        // Convert inputs to numbers
        length = parseFloat(length);
        width = parseFloat(width);

        // Validate input
        if (isNaN(length) || isNaN(width)) {
            console.log("Invalid input. Please enter numbers only.");
        } else {
            const area = calculateArea(length, width);
            console.log(`Area of rectangle: ${area}`);
        }

        rl.close();
    });
});