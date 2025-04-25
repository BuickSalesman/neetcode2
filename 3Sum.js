class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      const a = nums[i];

      if (a > 0) break;

      if (i > 0 && a === nums[i - 1]) continue;

      let l = i + 1,
        r = nums.length - 1;

      while (l < r) {
        const threeSum = a + nums[l] + nums[r];

        if (threeSum > 0) {
          r--;
        } else if (threeSum < 0) {
          l++;
        } else {
          res.push([a, nums[l], nums[r]]);
          l++;
          r--;
          while (l < r && nums[l] === nums[l - 1]) {
            l++;
          }
        }
      }
    }
    return res;
  }
}
