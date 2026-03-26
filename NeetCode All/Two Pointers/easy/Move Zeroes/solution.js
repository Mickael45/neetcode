class Solution {
  /**
   * @param {number[]} nums
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  moveZeroes(nums) {
    if (!nums || !Array.isArray(nums) || nums.length < 1 || nums.length > 10000)
      return [];

    let leftPointer = 0;

    for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
      const rightNumber = nums[rightPointer];

      if (rightNumber !== 0) {
        const leftNumber = nums[leftPointer];

        nums[leftPointer] = rightNumber;
        nums[rightPointer] = leftNumber;
        leftPointer++;
      }
    }
  }
}
