// Time complexity: O(n log n)
// Space complexity: O(1)

var findMinArrowShots = function(points) {
    if (points.length === 0) return 0;

    points.sort((a, b) => a[0] - b[0]);

    let res = points.length;
    let prev = points[0];

    for (let i = 1; i < points.length; i++) {
        let curr = points[i];
        if (curr[0] <= prev[1]) {
            res--;
            prev = [curr[0], Math.min(curr[1], prev[1])];
        } else {
            prev = curr;
        }
    }

    return res;
};

