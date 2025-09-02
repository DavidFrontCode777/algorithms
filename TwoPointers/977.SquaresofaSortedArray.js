/* Time complexity O(n) */
/* Space complexity O(1) */

function sortedSquares(nums) {
    const res = [];
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        if (nums[l] * nums[l] > nums[r] * nums[r]) {
            res.push(nums[l] * nums[l]);
            l++;
        } else {
            res.push(nums[r] * nums[r]);
            r--;
        }
    }

    return res.reverse(); // reverse because we're filling from largest to smallest
}