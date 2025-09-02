// #1 solution (noobie)
var isAnagram = function(s, t) {
    return s.split('').sort().join('')=== t.split('').sort().join('')
};

// #2 solution (pro)
var isAnagram = function(s, t) {
    if (s.length!==t.length) return false

    const count = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i)-base]++
        count[t.charCodeAt(i)-base]--
    }

    for (let i= 0; i < 26;i++) {
        if (count[i]!==0) return false
    }

    return true
};