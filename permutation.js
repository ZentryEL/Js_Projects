const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promisified input (same pattern you're using)
function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

// Permutation logic (backtracking)
function permutations(str) {
    const result = [];

    function backtrack(path, remaining) {
        if (remaining.length === 0) {
            result.push(path);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const char = remaining[i];
            const newRemaining =
                remaining.slice(0, i) + remaining.slice(i + 1);

            backtrack(path + char, newRemaining);
        }
    }

    backtrack("", str);
    return result;
}

// Main loop
async function main() {
    while (true) {
        console.log("\n=== Permutation Generator ===");

        const input = await ask("Enter a string (or type 'exit'): ");

        if (input.toLowerCase() === "exit") {
            console.log("Goodbye.");
            rl.close();
            break;
        }

        if (!input) {
            console.log("Please enter a valid string.");
            continue;
        }

        const result = permutations(input);

        console.log(`\nTotal permutations: ${result.length}`);
        console.log(result.join(", "));
    }
}

main();