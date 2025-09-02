// Time complexity: O(n × m)
// Space complexity: O(n × m)

var minPathSum = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    
    const res = new Array(ROWS + 1).fill().map(() => new Array(COLS + 1).fill(Infinity));
    res[ROWS - 1][COLS] = 0;
    
    for (let r = ROWS - 1; r >= 0; r--) {
        for (let c = COLS - 1; c >= 0; c--) {
            res[r][c] = grid[r][c] + Math.min(res[r + 1][c], res[r][c + 1]);
        }
    }
    
    return res[0][0];
};