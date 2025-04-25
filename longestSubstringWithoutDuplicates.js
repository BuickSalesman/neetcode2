class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let l = 0;
    let seen = {};
    let res = 0;

    for (let r = 0; r < s.length; r++) {
      if (s[r] in seen) {
        l = Math.max(l, seen[s[r]] + 1);
      }
      seen[s[r]] = r;
      res = Math.max(res, r - l + 1);
    }
    return res;
  }
}
