// Time complexity: O(N log N)
// Space complexity: O(N)

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const output = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const lastEnd = output[output.length - 1][1];

        if (start <= lastEnd) {
            output[output.length - 1][1] = Math.max(lastEnd, end);
        } else {
            output.push([start, end]);
        }
    }
    
    return output;
};