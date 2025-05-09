class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(1);

    const find = (node) => {
      let res = node;
      while (res !== parent[res]) {
        parent[res] = parent[parent[res]];
        res = parent[res];
      }

      return res;
    };

    const union = (n1, n2) => {
      let p1 = find(n1);
      let p2 = find(n2);

      if (p1 === p2) return 0;

      if (rank[p2] > rank[p1]) {
        parent[p1] = p2;
        rank[p2] += rank[p1];
      } else {
        parent[p2] = p1;
        rank[p1] += rank[p2];
      }

      return 1;
    };

    let res = n;

    for (const [a, b] of edges) {
      res -= union(a, b);
    }

    return res;
  }
}
