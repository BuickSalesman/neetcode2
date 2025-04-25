class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (t === "") return "";

    let window = {},
      countT = {};

    for (let c of t) {
      countT[c] = 1 + (countT[c] || 0);
    }

    let l = 0;
    let have = 0,
      need = Object.keys(countT).length;

    let res = [-1, -1],
      resLen = Infinity;

    for (let r = 0; r < s.length; r++) {
      let c = s[r];

      window[c] = 1 + (window[c] || 0);

      if (countT[c] && countT[c] === window[c]) {
        have++;
      }

      while (have === need) {
        if (r - l + 1 < resLen) {
          resLen = r - l + 1;
          res = [l, r];
        }

        window[s[l]]--;

        if (countT[s[l]] && countT[s[l]] > window[s[l]]) {
          have--;
        }
        l++;
      }
    }
    return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
  }
}
