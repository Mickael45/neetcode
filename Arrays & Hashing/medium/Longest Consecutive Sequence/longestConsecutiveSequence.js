class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (!nums || !Array.isArray(nums) || nums.length <= 0 || nums.length > 1000)
      return 0;

    const sortedNum = Array.from(new Set(nums.sort((a, b) => a - b)));
    let currentSequence = 1;
    let maxSequence = 1;

    for (let i = 1; i < sortedNum.length; i++) {
      if (sortedNum[i - 1] === sortedNum[i] - 1) currentSequence++;
      else currentSequence = 1;
      if (currentSequence > maxSequence) maxSequence = currentSequence;
    }

    return maxSequence;
  }
}
