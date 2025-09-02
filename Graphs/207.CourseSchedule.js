// Time complexity: O(V + E) where V = numCourses, E = number of prerequisites
// Space complexity: O(V + E)

var canFinish = function(numCourses, prerequisites) {
    const preMap = new Map();

    // Initialize graph with empty arrays
    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }

    // Build the graph
    for (const [course, pre] of prerequisites) {
        preMap.get(course).push(pre);
    }

    const visitSet = new Set();

    const dfs = (crs) => {
        if (visitSet.has(crs)) return false; // cycle detected
        if (preMap.get(crs).length === 0) return true; // no prerequisites

        visitSet.add(crs);

        for (const pre of preMap.get(crs)) {
            if (!dfs(pre)) return false;
        }

        visitSet.delete(crs);
        preMap.set(crs, []); // memoization: mark as completed

        return true;
    };

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};

