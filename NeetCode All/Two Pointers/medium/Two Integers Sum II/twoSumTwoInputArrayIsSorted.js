class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    if (
      !numbers ||
      !Array.isArray(numbers) ||
      numbers.length < 2 ||
      numbers.length > 1000
    )
      return [];
    if (
      target === null ||
      target === undefined ||
      target < -1000 ||
      target > 1000
    )
      return [];

    for (let i = 0; i < numbers.length; i++) {
      const diff = target - numbers[i];

      if (numbers.includes(diff)) {
        return [numbers.indexOf(diff) + 1, i + 1].sort((a, b) => a - b);
      }
    }

    return [];
  }
}
