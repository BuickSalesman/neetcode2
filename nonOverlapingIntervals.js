class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let res = 0;
    let lastEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
      if (lastEnd > intervals[i][0]) {
        res++;
      } else {
        lastEnd = intervals[i][1];
      }
    }
    return res;
  }
}
