/* Time complexity O(n) */
/* Space complexity O(n) */

// #1 solution (didn't like it)
var isPalindrome = function(s) {
    let newStr = "";

    for (let c of s) {
        if (/[a-zA-Z0-9]/.test(c)) {
            newStr += c.toLowerCase();
        }
    }

    return newStr === newStr.split('').reverse().join('');
};

// #2 solution (more geeked solution)

var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && !isAlphaNum(s[l])) {
            l++;
        }
        while (r > l && !isAlphaNum(s[r])) {
            r--;
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }

        l++;
        r--;
    }

    return true;
};

function isAlphaNum(c) {
    const code = c.charCodeAt(0);

    return (
        (code >= 48 && code <= 57) ||  // '0'-'9'
        (code >= 65 && code <= 90) ||  // 'A'-'Z'
        (code >= 97 && code <= 122)    // 'a'-'z'
    );
}