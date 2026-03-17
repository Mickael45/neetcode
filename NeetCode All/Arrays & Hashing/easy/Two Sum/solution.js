class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    if (!nums || !Array.isArray(nums) || nums.length < 2 || nums.length > 1000)
      return [];
    if (
      target === null ||
      target === undefined ||
      target < -10000000 ||
      target > 10000000
    )
      return [];

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i !== j && nums[i] + nums[j] === target) return [i, j];
      }
    }

    return [];
  }
}
