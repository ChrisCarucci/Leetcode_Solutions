// Runtime: 72ms    Memory Usage: 42.3MB

const rotate = function(matrix) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = r; c < matrix[0].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
    }

    for (let row of matrix) {
        row.reverse();
    }
}