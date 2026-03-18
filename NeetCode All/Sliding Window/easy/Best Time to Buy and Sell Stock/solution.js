class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    if (
      !prices ||
      !Array.isArray(prices) ||
      prices.length < 1 ||
      prices.length > 100
    )
      return 0;

    let maxProfit = 0;
    let minimumBuyPrice = prices[0];

    for (let sell of prices) {
      maxProfit = Math.max(maxProfit, sell - minimumBuyPrice);
      minimumBuyPrice = Math.min(minimumBuyPrice, sell);
    }
    return maxProfit;
  }
}
