class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let l = 0,
      r = nums.length - 1;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (nums[mid] === target) {
        return mid;
      }
      if (nums[l] <= nums[mid]) {
        if (nums[l] > target || nums[mid] < target) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      } else {
        if (nums[r] < target || nums[mid] > target) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      }
    }
    return -1;
  }
}

// [3,4,5,6,0,1,2] t = 6
//  l   m     r
//  0     3     6
