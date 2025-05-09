class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const output = [];
    output.push(intervals[0]);

    for (const [start, end] of intervals) {
      let lastEnd = output[output.length - 1][1];

      if (start <= lastEnd) {
        output[output.length - 1][1] = Math.max(lastEnd, end);
      } else {
        output.push([start, end]);
      }
    }
    return output;
  }
}
