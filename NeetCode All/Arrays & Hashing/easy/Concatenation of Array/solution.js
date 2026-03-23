class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  getConcatenation(nums) {
    if (!nums || !Array.isArray(nums) || nums.length < 1 || nums.length > 1000)
      return [];

    const ans = new Array(2 * nums.length);

    for (let i = 0; i < nums.length; i++) {
      const currentNumber = nums[i];

      ans[i] = currentNumber;
      ans[i + nums.length] = currentNumber;
    }

    return ans;
  }
}
