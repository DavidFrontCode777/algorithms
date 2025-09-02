// Time complexity: O(n)
// Space complexity: O(1)

var summaryRanges = function(nums) {
    const ans = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];

        while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
            i++;
        }

        if (start !== nums[i]) {
            ans.push(start + "->" + nums[i]);
        } else {
            ans.push(nums[i].toString());
        }

        i++;
    }

    return ans;
};