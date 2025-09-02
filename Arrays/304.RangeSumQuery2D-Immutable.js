/* 304. Range Sum Query 2D - Immutable */

/* Time complexity O(ROWS × COLS) */
/* Space complexity O(ROWS × COLS)  */

var NumMatrix = function(matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    this.sumMat = Array.from({ length: ROWS + 1 }, () => Array(COLS + 1).fill(0));

    for (let r = 0; r < ROWS; r++) {
        let prefix = 0;
        for (let c = 0; c < COLS; c++) {
            prefix += matrix[r][c];
            let above = this.sumMat[r][c + 1];
            this.sumMat[r + 1][c + 1] = prefix + above;
        }
    }
};

/* Time complexity O(1) */
/* Space complexity O(1) */

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let r1 = row1 + 1, c1 = col1 + 1, r2 = row2 + 1, c2 = col2 + 1;

    let bottomRight = this.sumMat[r2][c2];
    let above = this.sumMat[r1 - 1][c2];
    let left = this.sumMat[r2][c1 - 1];
    let topLeft = this.sumMat[r1 - 1][c1 - 1];

    return bottomRight - above - left + topLeft;
};