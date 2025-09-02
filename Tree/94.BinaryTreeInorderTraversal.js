/* 94. Binary Tree Inorder Traversal */

/* Time complexity O(n) */
/* Space complexity O(log N) but worst O(N) */

var inorderTraversal = function(root) {
    let cur = root
    let stack = []
    let res = []

    while (cur || stack.length>0) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur=stack.pop()
        res.push(cur.val)
        cur=cur.right
        
    }

    return res
};