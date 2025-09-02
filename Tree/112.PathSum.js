/* 112. Path Sum */

/* Time complexity  O(N) */
/* Space complexity O(h), where h is height of the tree */

var hasPathSum = function(root, targetSum) {
    const dfs = (node, curSum) => {
        if (!node) return false;
        
        curSum += node.val;
        if (!node.left && !node.right) {
            return curSum === targetSum;
        }
        
        return dfs(node.left, curSum) || dfs(node.right, curSum);
    };
    
    return dfs(root, 0);
};
    