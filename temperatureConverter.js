const readline = require('readline');
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playAgain () {
    readLine.question ("Do you want to convert another temperature? (yes/no): ", function(answer) {
        if (answer.toLowerCase() === "yes") {
            readLine.question ("Enter the temperature in Celsius: ", function(input) {
                let temperature = parseFloat (input);
                if (isNaN(temperature)) {
                    console.log ("Invalid input. Please enter a valid number.");
                } else {
                    let fahrenheit = (temperature * 9/5) + 32;
                    console.log (`${temperature}°C is equal to ${fahrenheit}°F`);
                }
                playAgain();
            });
        } else {
            readLine.close();
        }
    });
}

console.log ("Welcome to the Temperature Converter!");
readLine.question ("Enter the temperature in Celsius: ", function(input) {
    let temperature = parseFloat (input);

    if (isNaN(temperature)) {
        console.log ("Invalid input. Please enter a valid number.");
    } else {
        let fahrenheit = (temperature * 9/5) + 32;
        console.log (`${temperature}°C is equal to ${fahrenheit}°F`);
    }
    playAgain();
})

