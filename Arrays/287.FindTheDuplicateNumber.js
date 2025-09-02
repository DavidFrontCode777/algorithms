// Time complexity: O(N)
// Space complexity: O(1)

var findDuplicate = function(nums) {
    let slow=0;
    let fast=0; 
    while(true) {
        slow=nums[slow] // 1,3,2
        fast=nums[nums[fast]] // 3,4,2
        if (slow===fast)break
    }

    let slow2=0;
    while(true){
        slow=nums[slow] // 4,2,4,2,4,2,4
        slow2=nums[slow2] // 1,3,2,4,2,4,2
        if(slow===slow2)break
    }   
    return slow
};