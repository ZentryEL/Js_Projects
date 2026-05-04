const readline = require('readline');
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
  return new Promise(resolve => readLine.question(question, resolve));
}

async function main () {
    while (true) {
        let isPalindrome = true;
        const word = await ask("Word Please: ");

        for (let i = 0; i < word.length / 2; i++) {
            if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
                isPalindrome = false;
                break;
            }
        }

        if (isPalindrome) {
            console.log(word + " is a palindrome");
        } else {
            console.log(word + " is not a palindrome");
        }
    }
}

main();