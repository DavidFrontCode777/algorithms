/* 1314. Matrix Block Sum */

/* Time complexity O(m*n) */
/* Space complexity O(m*n) */

var matrixBlockSum = function(mat, k) {
    let m = mat.length;
    let n = mat[0].length;
    
    let preSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    // Build 2D prefix sum
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            preSum[i][j] = mat[i - 1][j - 1] + preSum[i - 1][j] + preSum[i][j - 1] - preSum[i - 1][j - 1];
        }
    }
    
    let ans = Array.from({ length: m }, () => Array(n).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let endI = Math.min(m, i + k);
            let endJ = Math.min(n, j + k);
            let startI = Math.max(1, i - k);
            let startJ = Math.max(1, j - k);
            
            ans[i - 1][j - 1] = preSum[endI][endJ] - preSum[startI - 1][endJ] - preSum[endI][startJ - 1] + preSum[startI - 1][startJ - 1];
        }
    }
    
    return ans;
};