class Solution {
  findMin(nums) {
    let l = 0,
      r = nums.length - 1;

    while (l < r) {
      let m = Math.floor(l + (r - l) / 2);

      if (nums[m] < nums[r]) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return nums[l];
  }
}
