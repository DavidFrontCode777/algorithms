/* Time complexity O(n) */
/* Space complexity O(n) */
 
var isIsomorphic = function(s, t) {
    const hashST={}
    const hashTS={}

    for(let i = 0; i < s.length; i++) {
        const a = s[i]
        const b = t[i]

        if ((hashST[a]&&hashST[a]!==b)||(hashTS[b]&&hashTS[b]!==a)) {
            return false
        }

        hashST[a]=b
        hashTS[b]=a
    }
   
    return true
};