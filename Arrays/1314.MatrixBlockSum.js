/* 1314. Matrix Block Sum */

/* Time complexity O(m*n) */
/* Space complexity O(m*n) */

var matrixBlockSum = function(mat, k) {
    const ROWS = mat.length;
    const COLS = mat[0].length;
    let preSum = Array.from({ length: ROWS + 1 }, () => Array(COLS + 1).fill(0));

    for (let r = 0; r < ROWS; r++) {
        let prefix = 0;
        for (let c = 0; c < COLS; c++) {
            prefix += mat[r][c];
            let above = preSum[r][c + 1];
            preSum[r + 1][c + 1] = prefix + above;
        }
    }
    
    let ans = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    
    for (let i = 1; i <= ROWS; i++) {
        for (let j = 1; j <= COLS; j++) {
            let endI = Math.min(ROWS, i + k);
            let endJ = Math.min(COLS, j + k);
            let startI = Math.max(1, i - k);
            let startJ = Math.max(1, j - k);
            
            ans[i - 1][j - 1] = preSum[endI][endJ] - preSum[startI - 1][endJ] - preSum[endI][startJ - 1] + preSum[startI - 1][startJ - 1];
        }
    }
    
    return ans;
};