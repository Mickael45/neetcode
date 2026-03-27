class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;

    while (endIndex >= startIndex) {
      const middleValueIndex = Math.floor((endIndex + startIndex) / 2);
      const middleValue = nums[middleValueIndex];

      if (middleValue === target) return middleValueIndex;
      else if (middleValue > target) endIndex = middleValueIndex - 1;
      else startIndex = middleValueIndex + 1;
    }
    return -1;
  }
}
