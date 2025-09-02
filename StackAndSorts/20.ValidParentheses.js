/* Time complexity O(n) */
/* Space complexity O(n) */

var isValid = function(s) {
    let openedBrackets=['(','{','[']
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let queue=[];

    for (let c of s) {
        if(openedBrackets.includes(c)) {
            queue.push(c)
        } else {
            if (queue.pop()!==map[c]) return false
        }
    }
    return queue.length===0
};