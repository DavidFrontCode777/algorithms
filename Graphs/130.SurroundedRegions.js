// Time complexity: O(n * m)
// Space complexity: O(n * m) in worst case, O(1) if we don't count recursion stack

var solve = function(board) {
    const ROWS = board.length;
    const COLS = board[0].length;
    
    const capture = (r, c) => {
        if (r < 0 || c < 0 || r === ROWS || c === COLS || board[r][c] !== "O") {
            return;
        }
        board[r][c] = "T";
        capture(r + 1, c);
        capture(r - 1, c);
        capture(r, c + 1);
        capture(r, c - 1);
    };
    
    // 1. (DFS) Capture unsurrounded regions (O -> T)
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === "O" && 
                (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1)) {
                capture(r, c);
            }
        }
    }
    
    // 2. Capture surrounded regions (O -> X)
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === "O") {
                board[r][c] = "X";
            }
        }
    }
    
    // 3. Uncapture unsurrounded regions (T -> O)
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === "T") {
                board[r][c] = "O";
            }
        }
    }
};