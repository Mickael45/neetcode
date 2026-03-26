class Solution {
  /**
   * @param {number[]} nums
   * @param {number} limit
   * @return {number}
   */
  longestSubarray(nums, limit) {
    let maxLength = 0;

    for (
      let leftWindowPointer = 0;
      leftWindowPointer < nums.length;
      leftWindowPointer++
    ) {
      const currentLeftValue = nums[leftWindowPointer];
      let minValue = currentLeftValue;
      let maxValue = currentLeftValue;

      for (
        let rightWindowPointer = leftWindowPointer;
        rightWindowPointer < nums.length;
        rightWindowPointer++
      ) {
        const currentValue = nums[rightWindowPointer];
        minValue = Math.min(minValue, currentValue);
        maxValue = Math.max(maxValue, currentValue);

        if (maxValue - minValue <= limit)
          maxLength = Math.max(
            maxLength,
            rightWindowPointer - leftWindowPointer + 1,
          );
      }
    }

    return maxLength;
  }
}
