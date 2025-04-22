class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let res = {};

    for (let s of strs) {
      const countMap = new Array(26).fill(0);
      for (let c of s) {
        countMap[c.charCodeAt(0) - "a".charCodeAt(0)]++;
      }
      const fingerPrint = countMap.join(",");
      if (!(fingerPrint in res)) {
        res[fingerPrint] = [];
      }
      res[fingerPrint].push(s);
    }

    return Object.values(res);
  }
}
