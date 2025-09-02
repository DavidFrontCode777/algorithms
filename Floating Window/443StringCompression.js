// Time complexity: O(n)
// Space complexity: O(1)

var compress = function(chars) {
    let write = 0;      
    let left = 0;       

    for (let right = 0; right <= chars.length; right++) {
        if (right === chars.length || chars[right] !== chars[left]) {
            chars[write++] = chars[left];  

            const count = right - left;
            if (count > 1) {
                const countStr = count.toString();
                for (let c of countStr) {
                    chars[write++] = c;  
                }
            }
            left = right;  
        }
    }

    return write;
};