// Time complexity: O(n × m)
// Space complexity: O(n)

var uniquePathsWithObstacles = function(grid) {
    const M = grid.length;
    const N = grid[0].length;
    const dp = new Array(N).fill(0);
    dp[N - 1] = 1;

    for (let r = M - 1; r >= 0; r--) {
        for (let c = N - 1; c >= 0; c--) {
            if (grid[r][c] === 1) {
                dp[c] = 0;
            } else if (c + 1 < N) {
                dp[c] = dp[c] + dp[c + 1];
            }
        }
    }

    return dp[0];
};