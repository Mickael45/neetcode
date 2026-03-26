class Solution {
  /**
   * @param {number[]} customers
   * @param {number[]} grumpy
   * @param {number} minutes
   * @return {number}
   */
  maxSatisfied(customers, grumpy, minutes) {
    let startWindowIndex = 0;
    let result = 0;
    let maxCount = 0;
    let currentCount = 0;

    for (
      let endWindowIndex = 0;
      endWindowIndex < grumpy.length;
      endWindowIndex++
    ) {
      const customerCount = customers[endWindowIndex];

      if (grumpy[endWindowIndex] === 1) {
        currentCount += customerCount;
      } else {
        result += customerCount;
      }

      if (endWindowIndex - startWindowIndex + 1 > minutes) {
        if (grumpy[startWindowIndex] === 1) {
          currentCount -= customers[startWindowIndex];
        }
        startWindowIndex++;
      }

      maxCount = Math.max(currentCount, maxCount);
    }

    return result + maxCount;
  }
}
