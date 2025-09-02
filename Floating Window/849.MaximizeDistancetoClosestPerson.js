// Time complexity: O(n)
// Space complexity: O(1)

var maxDistToClosest = function(seats) {
    let maxDistance = 0;
    let lastOccupied = -1;

    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            if (lastOccupied === -1) {
                maxDistance = i;
            } else {
                const distance = Math.floor((i - lastOccupied) / 2);
                maxDistance = Math.max(maxDistance, distance);
            }
            lastOccupied = i;
        }
    }

    if (seats[seats.length - 1] === 0) {
        const distance = seats.length - 1 - lastOccupied;
        maxDistance = Math.max(maxDistance, distance);
    }

    return maxDistance;
};