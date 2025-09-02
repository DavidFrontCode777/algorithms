// Time complexity: O(n) - avg case, O(n square) - worst case
// Space complexity: O(1) for in-place sorting, (mutates input array); O(log n) recursion stack space (for quickselect calls)

// #1 solution with quick select
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    
    function quickSelect(l, r) {
        const pivot = nums[r];
        let p = l;
        
        for (let i = l; i < r; i++) {
            if (nums[i] <= pivot) {
                // Swap elements
                [nums[p], nums[i]] = [nums[i], nums[p]];
                p++;
            }
        }
        
        // Swap pivot to its correct position
        [nums[p], nums[r]] = [nums[r], nums[p]];
        
        if (p > k) return quickSelect(l, p - 1);
        else if (p < k) return quickSelect(p + 1, r);
        else return nums[p];
    }
    
    return quickSelect(0, nums.length - 1);
};