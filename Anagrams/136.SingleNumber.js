// Time complexity: O(n)
// Space complexity: O(1)

function singleNumber(nums) {
    let res = 0;
    for (const n of nums) {
        res = n ^ res;
    }
    return res;
}