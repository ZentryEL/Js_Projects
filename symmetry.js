// Program to check if a matrix is symmetric

function isSymmetric(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // A symmetric matrix must be square
    if (rows !== cols) {
        return false;
    }

    // Check if matrix[i][j] === matrix[j][i]
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }

    return true;
}

// Example matrix
const matrix = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];

if (isSymmetric(matrix)) {
    console.log("The matrix is symmetric.");
} else {
    console.log("The matrix is not symmetric.");
}