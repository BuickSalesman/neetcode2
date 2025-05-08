class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {boolean}
   */
  canFinish(numCourses, prerequisites) {
    const preMap = {};

    for (let i = 0; i < numCourses; i++) {
      preMap[i] = [];
    }

    for (const [course, prereq] of prerequisites) {
      preMap[course].push(prereq);
    }

    const visited = new Set();

    const dfs = (course) => {
      if (visited.has(course)) return false;
      if (preMap[course].length === 0) return true;

      visited.add(course);

      for (let prereq of preMap[course]) {
        if (!dfs(prereq)) {
          return false;
        }
      }
      visited.delete(course);
      preMap[course] = [];
      return true;
    };

    for (let c = 0; c < numCourses; c++) {
      if (!dfs(c)) return false;
    }

    return true;
  }
}
