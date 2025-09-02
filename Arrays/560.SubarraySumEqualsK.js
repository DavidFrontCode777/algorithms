/* 560. Subarray Sum Equals K */

/* Time complexity O(N) linear time solution */
/* Space complexity O(N) worst case */

var subarraySum = function(nums, k) {
    let res=0;
    let curPx=0; 
    let hashTable={0:1}
    for (let n of nums){
        curPx+=n
        const diff = curPx - k
        res += hashTable[diff] || 0
        hashTable[curPx] = hashTable[curPx]+1 || 1
    }
    return res
};