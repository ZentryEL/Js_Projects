const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter value of a: ", (a) => {
    rl.question("Enter value of b: ", (b) => {
        rl.question("Enter value of c: ", (c) => {

            a = Number(a);
            b = Number(b);
            c = Number(c);

            const discriminant = (b * b) - (4 * a * c);

            if (discriminant > 0) {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

                console.log(`Roots are real and different: ${root1} and ${root2}`);
            } 
            else if (discriminant === 0) {
                const root = -b / (2 * a);

                console.log(`Roots are real and equal: ${root}`);
            } 
            else {
                const realPart = (-b / (2 * a)).toFixed(2);
                const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

                console.log(
                    `Roots are complex: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`
                );
            }

            rl.close();
        });
    });
});