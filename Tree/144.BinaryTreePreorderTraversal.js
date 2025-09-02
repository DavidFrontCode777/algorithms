/* 144. Binary Tree Preorder Traversal */

/* Time complexity O(n) */
/* Space complexity O(h), where h is height of tree. If it balanced binary tree O(log N). 
Worst case O(n) */

/* If binary tree is like Bamboo so then O(h) turn in O(n). That's worst case O(n) */
/* If it balanced binary tree that's O(log*n) */

var preorderTraversal = function(root) {
    let cur = root
    let stack = []
    let res = []

    while (cur || stack.length>0) {
        if (cur) {
            res.push(cur.val)
            stack.push(cur.right)
            cur=cur.left
        } else {
            cur = stack.pop();
        }
    }

    return res
};