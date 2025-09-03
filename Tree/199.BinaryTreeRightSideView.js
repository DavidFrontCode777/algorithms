/* 199. Binary Tree Right Side View */

/* Time complexity O(N) */
/* Space complexity O(N) worst case if tree is completely unbalanced. In fact it's O(N/2) but we should omit that */

var rightSideView = function(root) {
    if (!root) return []
    let queue = [root]
    const res = []
    let head = 0;

    while (head < queue.length) {
        const qLength = queue.length - head;
        let value = null;

        for (let i = 0; i < qLength; i++) {
            let node = queue[head++];
            if (node) {
                value = node.val
                if (node.left) queue.push(node.left)    
                if (node.right) queue.push(node.right)
            }
        }

        if (value !== null) res.push(value)
    }

    return res
};