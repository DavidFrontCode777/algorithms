/* 101. SymmetricTree */

/* Time complexity O(N) */
/* Space complexity O(h), where h is height of the tree like any DFS algorithm */

var isSymmetric = function(root) {
    const dfs = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        
        return (left.val === right.val &&
                dfs(left.left, right.right) &&
                dfs(left.right, right.left));
    };
    
    return dfs(root.left, root.right);
};
