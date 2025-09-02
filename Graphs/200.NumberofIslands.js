// Time complexity: O(n × m)
// Space complexity: O(n × m)

var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    const visit = new Set();
    let islands = 0;

    const bfs = function(r, c) {
        const q = [];
        q.push([r, c]);
        visit.add(`${r},${c}`);

        while (q.length > 0) {
            const [row, col] = q.shift();
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                const key = `${nr},${nc}`;

                if (
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    grid[nr][nc] === "1" &&
                    !visit.has(key)
                ) {
                    q.push([nr, nc]);
                    visit.add(key);
                }
            }
        }
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1" && !visit.has(`${r},${c}`)) {
                bfs(r, c);
                islands++;
            }
        }
    }

    return islands;
};