// Time complexity: O(n)
// Space complexity: O(n)

var topKFrequent = function(nums, k) {
    const count = {};
    const freq = Array.from({length: nums.length + 1}, () => []);
    
    // Count the frequency of each number
    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }
    
    // Group numbers by their frequency
    for (const [n, c] of Object.entries(count)) {
        freq[c].push(parseInt(n)); // Convert key back to number (Object.keys returns strings)
    }
    
    const res = [];
    // Iterate from highest frequency to lowest
    for (let i = freq.length - 1; i > 0; i--) {
        for (const n of freq[i]) {
            res.push(n);
            if (res.length === k) {
                return res;
            }
        }
    }
    
    return res;
};