// Time complexity: O(N²)
// Space complexity: O(N²)

function shortestPathBinaryMatrix(grid) {
    const N = grid.length;
    if (grid[0][0] === 1 || grid[N-1][N-1] === 1) return -1;
    
    const q = [[0, 0, 1]]; // [r, c, length]
    const visit = new Set();
    visit.add(`0,0`);
    
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0],
        [1, 1], [-1, -1], [1, -1], [-1, 1]
    ];
    
    while (q.length > 0) {
        const [r, c, length] = q.shift();
        
        if (r < 0 || c < 0 || r >= N || c >= N || grid[r][c] === 1) {
            continue;
        }
        
        if (r === N - 1 && c === N - 1) {
            return length;
        }
        
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            const key = `${nr},${nc}`;
            
            if (!visit.has(key)) {
                q.push([nr, nc, length + 1]);
                visit.add(key);
            }
        }
    }
    
    return -1;
}