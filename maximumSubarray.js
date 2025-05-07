class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    let maxsub = nums[0],
      curSum = 0;

    for (let num of nums) {
      if (curSum < 0) {
        curSum = 0;
      }
      curSum += num;
      maxsub = Math.max(curSum, maxsub);
    }
    return maxsub;
  }
}
