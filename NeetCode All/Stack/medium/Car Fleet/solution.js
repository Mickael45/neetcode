class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, positions, speeds) {
    const times = [];
    const sortedPositionSpeed = positions
      .map((position, index) => [position, speeds[index]])
      .sort((a, b) => b[0] - a[0]);

    for (const [position, speed] of sortedPositionSpeed) {
      const time = (target - position) / speed;

      if (times.length === 0 || time > times[times.length - 1])
        times.push(time);
    }
    return times.length;
  }
}
