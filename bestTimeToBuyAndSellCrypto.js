class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let l = 0,
      r = 1;
    let res = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        res = Math.max(res, prices[r] - prices[l]);
      } else {
        l = r;
      }
      r++;
    }
    return res;
  }
}
