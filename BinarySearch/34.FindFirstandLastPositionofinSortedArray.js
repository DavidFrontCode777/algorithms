// Time complexity: O(log N)
// Space complexity: O(1)

var searchRange = function(nums, target) {
    const left = binSearch(nums, target, true);
    const right = binSearch(nums, target, false);
    return [left, right];
};

function binSearch(nums, target, leftBias) {
    let l = 0, r = nums.length - 1;
    let i = -1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (target > nums[m]) {
            l = m + 1;
        } else if (target < nums[m]) {
            r = m - 1;
        } else {
            // target == nums[m]
            i = m;
            if (leftBias) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
    }

    return i;
}