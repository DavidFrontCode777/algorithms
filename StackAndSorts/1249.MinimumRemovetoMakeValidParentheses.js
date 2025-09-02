/* Time complexity O(n) */
/* Space complexity O(n) */

var minRemoveToMakeValid = function(s) {
    const res = [];
    let cnt = 0;

    for (const c of s) {
        if (c === '(') {
            res.push(c);
            cnt++;
        } else if (c === ')' && cnt > 0) {
            res.push(c);
            cnt--;
        } else if (c !== ')') {
            res.push(c);
        }
    }

    const filtered = [];
    for (let i = res.length - 1; i >= 0; i--) {
        const c = res[i];
        if (c === '(' && cnt > 0) {
            cnt--;
        } else {
            filtered.push(c);
        }
    }

    return filtered.reverse().join('');
};
