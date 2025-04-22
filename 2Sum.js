class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const hash = {};

    for (const [i, num] of nums.entries()) {
      const diff = target - num;
      if (diff in hash) {
        return [hash[diff], i];
      }
      hash[num] = i;
    }
  }
}
