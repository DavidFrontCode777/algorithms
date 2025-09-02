// Time complexity: O(N log N)
// Space complexity: O(n)

var carPooling = function(trips, capacity) {
    trips.sort((a, b) => a[1] - b[1]); // Sort by start time

    const minHeap = []; // Min-heap to track [end, passengers]
    let curPassengers = 0;

    for (const [numPassengers, start, end] of trips) {
        // Drop off passengers whose trip has ended
        while (minHeap.length && minHeap[0][0] <= start) {
            curPassengers -= minHeap[0][1];
            minHeap.shift(); // Remove the trip
        }

        curPassengers += numPassengers;
        if (curPassengers > capacity) {
            return false;
        }

        // Insert current trip into heap and keep heap sorted by end time
        minHeap.push([end, numPassengers]);
        minHeap.sort((a, b) => a[0] - b[0]); // Maintain heap property manually
    }

    return true;
};