class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let l = 0;
    let charSet = {};
    let maxF = 0;
    let res = 0;

    for (let r = 0; r < s.length; r++) {
      charSet[s[r]] = (charSet[s[r]] || 0) + 1;
      maxF = Math.max(maxF, charSet[s[r]]);

      if (r - l + 1 - maxF > k) {
        charSet[s[l]] -= 1;
        l++;
      }
      res = Math.max(res, r - l + 1);
    }
    return res;
  }
}
