// Time complexity: O(n + m)
// Space complexity: O(n + m)

var findOrder = function(numCourses, prerequisites) {
    const preMap = new Map();
    for (let i = 0; i < numCourses; i++) {
        preMap.set(i,[])
    }
    for (const [pre,value] of prerequisites) {
        preMap.get(pre).push(value)
    }
    const cycle = new Set();
    const visited = new Set();
    let result = []; 
    const dfs = (num) => {
        if (cycle.has(num)) return false
        if (visited.has(num)) return true

        cycle.add(num)
        for (const pre of preMap.get(num)) {
            if (!dfs(pre)) return false
        }
        cycle.delete(num)
        visited.add(num)
        result.push(num)

        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [] 
    }

    return result
};