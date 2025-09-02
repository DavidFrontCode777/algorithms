/* Time complexity O(1) */
/* Space complexity O(1) */

var isValidSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const squares = Array.from({ length: 9 }, () => new Set()); // square index = (r // 3) * 3 + (c // 3)

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            if (val === ".") continue;

            const squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (rows[r].has(val) || cols[c].has(val) || squares[squareIndex].has(val)) {
                return false;
            }

            rows[r].add(val);
            cols[c].add(val);
            squares[squareIndex].add(val);
        }
    }

    return true;
};