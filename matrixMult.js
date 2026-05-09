const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

// Function to create a matrix from user input
async function inputMatrix(rows, cols, name) {
  let matrix = [];

  console.log(`\nEnter values for Matrix ${name}:`);

  for (let i = 0; i < rows; i++) {
    let rowInput = await ask(`Row ${i + 1} (space-separated ${cols} numbers): `);
    let row = rowInput.split(" ").map(Number);

    if (row.length !== cols || row.some(isNaN)) {
      console.log("Invalid input. Try again.");
      i--;
      continue;
    }

    matrix.push(row);
  }

  return matrix;
}

// Matrix multiplication function
function multiplyMatrices(A, B) {
  let result = [];

  for (let i = 0; i < A.length; i++) {
    result[i] = [];

    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < B.length; k++) {
        sum += A[i][k] * B[k][j];
      }

      result[i][j] = sum;
    }
  }

  return result;
}

// Main program
async function main() {
  console.log("=== Matrix Multiplication ===");

  const rowsA = parseInt(await ask("Enter rows of Matrix A: "));
  const colsA = parseInt(await ask("Enter columns of Matrix A: "));

  const rowsB = parseInt(await ask("Enter rows of Matrix B: "));
  const colsB = parseInt(await ask("Enter columns of Matrix B: "));

  if (colsA !== rowsB) {
    console.log("\n❌ Matrix multiplication not possible.");
    console.log("Columns of A must equal rows of B.");
    rl.close();
    return;
  }

  const A = await inputMatrix(rowsA, colsA, "A");
  const B = await inputMatrix(rowsB, colsB, "B");

  const result = multiplyMatrices(A, B);

  console.log("\n✅ Result Matrix:");
  result.forEach(row => console.log(row.join(" ")));

  rl.close();
}

main();