/* 199. Binary Tree Right Side View */

/* Time complexity O(N) */
/* Space complexity O(N) worst case if tree is completely unbalanced. In fact it's O(N/2) but we should omit that */

var rightSideView = function(root) {
    let res = [];
    let queue = [root]; 
    
    while (queue.length) {
        let rightSide = null;
        let qLen = queue.length;
        
        for (let i = 0; i < qLen; i++) {
            let node = queue.shift();
            if (node) {
                rightSide = node;
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        
        if (rightSide) {
            res.push(rightSide.val);
        }
    }
    
    return res;
};