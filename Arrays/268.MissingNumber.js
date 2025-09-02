// Time complexity: O(N)
// Space complexity: O(1)

var missingNumber = function (nums) {
    let res = nums.length;
    for (let i = 0; i < nums.length;i++) {
        res += i - nums[i]
    }
    return res
};