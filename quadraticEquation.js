// Quadratic Equation Solver (CLI)
// Solves: ax^2 + bx + c = 0

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter value of a: ", (aInput) => {
    rl.question("Enter value of b: ", (bInput) => {
        rl.question("Enter value of c: ", (cInput) => {

            const a = parseFloat(aInput);
            const b = parseFloat(bInput);
            const c = parseFloat(cInput);

            // Check if inputs are valid numbers
            if (isNaN(a) || isNaN(b) || isNaN(c)) {
                console.log("Please enter valid numbers.");
                rl.close();
                return;
            }

            // Check if a is zero
            if (a === 0) {
                console.log("Value of 'a' cannot be 0 in a quadratic equation.");
                rl.close();
                return;
            }

            // Discriminant formula
            const discriminant = b * b - 4 * a * c;

            console.log(`\nDiscriminant = ${discriminant}`);

            // Determine roots
            if (discriminant > 0) {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

                console.log("Two real and distinct roots:");
                console.log(`Root 1 = ${root1}`);
                console.log(`Root 2 = ${root2}`);

            } else if (discriminant === 0) {
                const root = -b / (2 * a);

                console.log("One real root:");
                console.log(`Root = ${root}`);

            } else {
                const realPart = (-b / (2 * a)).toFixed(2);
                const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

                console.log("Two complex roots:");
                console.log(`Root 1 = ${realPart} + ${imaginaryPart}i`);
                console.log(`Root 2 = ${realPart} - ${imaginaryPart}i`);
            }

            rl.close();
        });
    });
});