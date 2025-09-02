// Time complexity: O(2^2n)
// Space complexity: O(n)

var generateParenthesis = function(n) {
    const res = [];
    const stack = [];

    const backtrack = (openN, closedN) => {
        if (openN === closedN && openN === n) {
            res.push(stack.join(""));
            return;
        }

        if (openN < n) {
            stack.push("(");
            backtrack(openN + 1, closedN);
            stack.pop();
        }

        if (closedN < openN) {
            stack.push(")");
            backtrack(openN, closedN + 1);
            stack.pop();
        }
    };

    backtrack(0, 0);
    return res;
};