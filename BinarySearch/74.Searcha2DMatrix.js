// Time complexity: O(log m + log n)
// Space complexity: O(1)

// neetCode->chatGPT solution

var searchMatrix = function(matrix, target) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;

    let top = 0, bot = ROWS - 1;

    while (top <= bot) {
        let row = Math.floor((top + bot) / 2);

        if (target > matrix[row][COLS - 1]) {
            top = row + 1;
        } else if (target < matrix[row][0]) {
            bot = row - 1;
        } else {
            break;
        }
    }

    if (top > bot) {
        return false;
    }

    let row = Math.floor((top + bot) / 2);
    let l = 0, r = COLS - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (target > matrix[row][m]) {
            l = m + 1;
        } else if (target < matrix[row][m]) {
            r = m - 1;
        } else {
            return true;
        }
    }

    return false;
};

// my solution. most optimal but could be cleaner
var searchMatrix = function(matrix, target) {
    let l = 0, r = matrix.length-1;
    let elem=0;

    while (l<=r) {
        let m = Math.floor((r+l)/2)
        if (target<matrix[m][0]) {
            r=m-1
        } else if (target>matrix[m][matrix[m].length-1]) {
            l=m+1
        } else {
            elem = m
            break;
        }
    }

    return binarySearch(matrix[elem],target)
};

var binarySearch = function(arr,target) {
    let l = 0, r = arr.length-1;

    while (l<=r) {
        let m = Math.floor((l+r)/2)
        if (target<arr[m]) {
            r=m-1
        } else if(target>arr[m]) {
            l=m+1
        } else {
            return true
        }
    }

    return false
}