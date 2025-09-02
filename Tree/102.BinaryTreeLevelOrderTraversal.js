/* 102. Binary Tree Level Order Traversal */

/* Time complexity O(N) */
/* Space complexity O(N). In fact it's O(N/2) but we should omit that */

var levelOrder = function(root) {
  const res = []; 
  if (!root) return res; 

  const q = [];
  q.push(root);

  while (q.length > 0) {
    const qLen = q.length;
    const level = [];

    for (let i = 0; i < qLen; i++) {
      const node = q.shift(); // 20
      if (node) {
        level.push(node.val); 
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
    }

    if (level.length > 0) {
      res.push(level);
    }
  }

  return res;
}