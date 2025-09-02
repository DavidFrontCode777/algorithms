/* Time complexity O(n) */
/* Space complexity O(n) */

function twoSum(nums, target) {
    const prevMap = {}; // val: index

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const diff = target - n;
        if (diff in prevMap) {
            return [prevMap[diff], i];
        }
        prevMap[n] = i;
    }
}

