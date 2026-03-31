class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const results = [];

    for (
      let leftPointer = 0;
      leftPointer < temperatures.length;
      leftPointer++
    ) {
      const leftTemperature = temperatures[leftPointer];

      for (
        let rightPointer = leftPointer;
        rightPointer < temperatures.length;
        rightPointer++
      ) {
        const rightTemperature = temperatures[rightPointer];

        if (rightTemperature > leftTemperature) {
          results.push(rightPointer - leftPointer);
          break;
        } else if (rightPointer + 1 === temperatures.length) {
          results.push(0);
        }
      }
    }

    return results;
  }
}
