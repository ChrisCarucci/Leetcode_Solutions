const updateMatrix = function(matrix) {
    const queue = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 1) {
                matrix[i][j] = Infinity;
            } else {
                queue.push([i, j]);
            }
        }
    }
    bfs(matrix, queue)
    return matrix;
};

const bfs = (matrix, queue) => {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const validate = (row, col) => col >=0 && row >= 0 && row < matrix.length && col < matrix[0].length;
    while(queue.length) {
        const [x, y] = queue.shift();
        for(const [dx, dy] of directions) {
            const row = x + dx;
            const col = y + dy;
            if(validate(row, col) && matrix[row][col] > matrix[x][y] + 1) {
                matrix[row][col] = matrix[x][y] + 1;
                queue.push([row, col]);
            }
        }
    }
}