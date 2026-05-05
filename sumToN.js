const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  while (true) {
    const input = await ask("Enter a number (N): ");

    const N = Number(input);

    if (isNaN(N) || N < 1) {
      console.log("Please enter a valid positive number.\n");
      continue;
    }

    let sum = 0;

    for (let i = 2; i <= N; i += 2) {
      sum += i;
    }

    console.log(`Sum of even numbers from 1 to ${N} is: ${sum}\n`);
  }
}

main();