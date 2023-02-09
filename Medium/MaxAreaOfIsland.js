var maxAreaOfIsland = function(grid) {
    var maxScore = 0
    for (var r = 0; r < grid.length; r++){
        for (var c = 0; c < grid[0].length; c++){
            maxScore = Math.max(maxScore, DFS(grid,r,c))
        }
    }
    return maxScore
};

function DFS(grid, row, col){
    
    if (row >= grid.length || col >= grid[0].length || col < 0 || row < 0 || grid[row][col] != 1) return 0

    grid[row][col] = 2;
    
    var up = DFS(grid, row + 1, col)
    var down = DFS(grid, row - 1, col)
    var right = DFS(grid, row, col + 1)
    var left = DFS(grid, row, col - 1)
    
    return 1 + up + down + left + right

}