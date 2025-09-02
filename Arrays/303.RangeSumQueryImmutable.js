/* 303. Range Sum Query - Immutable */

/* Time complexity: NumArray - O(N), sumRange - O(1) */
/* Space complexity O(N) */

var NumArray = function(nums) {
    this.prefix = [];
    let cur = 0;
    for (let n of nums) {
        cur += n;
        this.prefix.push(cur);
    }
};

NumArray.prototype.sumRange = function(left, right) {
    let rightSum = this.prefix[right];
    let leftSum = left > 0 ? this.prefix[left - 1] : 0;
    return rightSum - leftSum;
};

// [-2, 0, 3, -5, 2, -1]
// [-2, -2, 1, -4, -2, -3]
