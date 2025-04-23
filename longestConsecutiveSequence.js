class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    let numSet = {};
    let longest = 0;

    for (const num of nums) {
      numSet[num] = true;
    }

    for (let num in numSet) {
      num = parseInt(num);
      if (!(num - 1 in numSet)) {
        let length = 1;
        while (num + length in numSet) {
          length++;
        }
        longest = Math.max(length, longest);
      }
    }

    return longest;
  }
}
