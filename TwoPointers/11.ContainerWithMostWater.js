/* Time complexity O(n square) */
/* Space complexity O(1) */
// #1 brute force

var maxArea = function(height) {
    let res=0;
    for (let l = 0; l < height.length;l++) {
        for (let r = l+1;r < height.length;r++) {
            let area = (r - l) * Math.min(height[l],height[r])
            res=Math.max(area,res)
        }
    }
    return res
};

// #2 Time complexity O(n) solution
// Space complexity O(1)

var maxArea = function(height) {
    let l=0,r=height.length-1
    let res = 0;
    while (l<r) {
        let area = (r-l)*Math.min(height[l],height[r])
        res=Math.max(res,area)

        if (height[l]<height[r]) {
            l+=1
        } else {
            r-=1
        }
    }

    return res
};