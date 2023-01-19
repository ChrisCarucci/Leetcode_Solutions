// Runtime: 82ms    Beats: 88.68%    Memory: 44.5MB    Beats: 90.28%
// Recursive Solution


grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","1"]
]


function numIslands(grid) {
    const H = grid.length;  // 4
    const W = grid[0].length; // 5

    let count = 0;
    
    for (let r = 0; r < H; r++) { // Row
      for (let c = 0; c < W; c++) { // Col
        if (grid[r][c] === '0') continue;
        
        count++; // 3
        dfs(r, c);
      }
    }
    return count;
    
    function dfs(r, c) { // Gets called first time with (0, 0)

      if (r < 0 || c < 0 || r === H || c === W) return; // Checks if out of bounds.
      if (grid[r][c] === '0') return; 
      console.log("Row: ",  r, "Col: ", c)
      
      grid[r][c] = '0'; // (0, 0) turns from  1 to 0.
      dfs(r-1, c); // (-1, 0) returns due to out of bounds
      dfs(r+1, c); // (1, 0) turns from 1 to 0.
      dfs(r, c-1); // (0, -1) retuns due to out of bounds
      dfs(r, c+1); // 
    }
  }

  console.log(numIslands(grid))