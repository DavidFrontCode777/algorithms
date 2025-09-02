/* Time complexity O(n square) */
/* Space complexity O() */

// #1
const res = new Array(temperatures.length).fill(0);
    const stack = []; // pair: [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
        const t = temperatures[i];

        while (stack.length > 0 && t > stack[stack.length - 1][0]) {
            const [stackT, stackInd] = stack.pop();
            res[stackInd] = i - stackInd;
        }

        stack.push([t, i]);
    }

    return res;

// #2 my solution (brute force)
/* Time complexity O(n square) */
/* Space complexity O() */
var dailyTemperatures = function(temperatures) {
    let res=[];
    
    for (let i =0; i < temperatures.length; i++) {
        let cnt=0;
        let found=false;

        for (let j = i+1; j<temperatures.length;j++) {
            cnt++
            if (temperatures[j]>temperatures[i]) {
                res.push(cnt)
                cnt=0
                found=true
                break
            }
        }
        if (!found) res.push(0)
    }

    return res
};
