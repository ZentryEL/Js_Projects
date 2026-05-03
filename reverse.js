const readline = require('readline');
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Promisify 
function ask(question) {
  return new Promise(resolve => readLine.question(question,resolve));
}

async function main (){

    while (true) {
        let reversal = "";
        console.log ("Give me a word I shall reverse");

        const word = await ask ("Give me a motherfucking word bitch! ");

        for (let i = 0; i < word.length; i++) {
            reversal = word.charAt(i) + reversal;
        }
        console.log ("Reversed word is: " + reversal);
    }
}
main();