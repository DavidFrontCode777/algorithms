// Time complexity: O(n)
// Space complexity: O(n)

var findMaxConsecutiveOnes = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === 1) {
            nums[i] += nums[i - 1];
        }
    }
    return Math.max(...nums);
};