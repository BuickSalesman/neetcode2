class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  lengthOfLIS(nums) {
    let lis = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) {
          lis[i] = Math.max(lis[i], lis[j] + 1);
        }
      }
    }
    return Math.max(...lis);
  }
}
