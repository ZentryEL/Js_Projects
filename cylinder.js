// Program to calculate the area and volume of a cylinder

// Import readline module
const readline = require("readline");

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for radius
rl.question("Enter the radius of the cylinder: ", function(radius) {

    // Ask for height
    rl.question("Enter the height of the cylinder: ", function(height) {

        // Convert input to numbers
        radius = parseFloat(radius);
        height = parseFloat(height);

        // Calculate surface area
        const area = 2 * Math.PI * radius * (radius + height);

        // Calculate volume
        const volume = Math.PI * radius * radius * height;

        // Display results
        console.log("\nCylinder Calculations");
        console.log("----------------------");
        console.log("Surface Area = " + area.toFixed(2));
        console.log("Volume = " + volume.toFixed(2));

        // Close interface
        rl.close();
    });
});