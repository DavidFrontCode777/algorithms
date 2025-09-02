// Time complexity: O(log N)
// Space complexity: O(1)

var peakIndexInMountainArray = function(arr) {
    let low = 0;
    let high = arr.length-1;

    while (low<high) {
        let mid=Math.floor((low+high)/2)
        if (arr[mid]<arr[mid+1]) { 
            low=mid+1
        } else {
            high=mid-1
        }
    }

    return low
};