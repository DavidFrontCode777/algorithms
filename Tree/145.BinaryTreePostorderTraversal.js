/* 145. Binary Tree Postorder Traversal */

/* Time complexity O(N) */
/* Info below NeetCode says, but solution taken from DeepSeek and DS told other info */
/* Space complexity O(h). If it's balanced - O(log N), if it's not O(N) */

var postorderTraversal = function(root) {
    if (!root) return [];

    let stack1 = [root];
    let stack2 = [];
    let res = [];

    while (stack1.length > 0) {
        let cur = stack1.pop();
        stack2.push(cur);

        
        if (cur.left) stack1.push(cur.left);
        if (cur.right) stack1.push(cur.right);
    }

    
    while (stack2.length > 0) {
        res.push(stack2.pop().val);
    }

    return res;
};