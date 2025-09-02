// Time complexity: O(N log N)
// Space complexity: O(1)
/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a,b)=>a[0]-b[0])
        for (let i = 1; i < intervals.length; i++) {
            const interval1 =  intervals[i-1].end
            const interval2 =  intervals[i].start
            if (interval2<interval1) {
                return false
            }
        }
        return true
    }
}