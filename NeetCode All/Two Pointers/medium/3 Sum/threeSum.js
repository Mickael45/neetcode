class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    if (!nums || !Array.isArray(nums) || nums.length < 3 || nums.length > 1000)
      return [];
    if (new Set(nums).size === 1 && nums[0] === 0) return [[0, 0, 0]];
    if (nums.filter((num) => num >= 0).length === nums.length) return [];
    if (nums.filter((num) => num <= 0).length === nums.length) return [];

    const sortedNumbers = nums.sort((a, b) => a - b);
    const sortedNumbersLength = sortedNumbers.length;
    const sumHashMap = {};

    for (let i = 1; i < sortedNumbersLength; i++) {
      const currentNumber = sortedNumbers[i];
      let startIndex = 0;
      let endIndex = sortedNumbersLength - 1;

      while (startIndex < i && endIndex > i) {
        const previousNumber = sortedNumbers[startIndex];
        const nextNumber = sortedNumbers[endIndex];
        const sum = currentNumber + previousNumber + nextNumber;
        const sumHash = `${previousNumber}${currentNumber}${nextNumber}`;

        if (sum === 0 && !sumHashMap[sumHash]) {
          sumHashMap[sumHash] = [previousNumber, currentNumber, nextNumber];
        }
        if (sum > 0) endIndex--;
        else startIndex++;
      }
    }
    return Object.values(sumHashMap);
  }
}
