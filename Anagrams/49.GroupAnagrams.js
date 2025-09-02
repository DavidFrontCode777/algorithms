// Time complexity: O(m * n), m is the number of strings, n is the maximum length of a string
// Space complexity: O(m * n)

var groupAnagrams = function(strs) {
    const res = new Map(); // Map from count key (stringified) to list of anagrams

    for (let s of strs) {
        const count = new Array(26).fill(0); // Frequency of a-z

        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = count.join('#'); // create a unique key from the count array
        if (!res.has(key)) res.set(key, []);
        res.get(key).push(s);
    }

    return Array.from(res.values());
};