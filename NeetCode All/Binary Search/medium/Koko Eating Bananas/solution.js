class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    const sortedPiles = piles.sort((a, b) => b - a);
    let leftPointer = 1;
    let rightPointer = sortedPiles[0];
    let result = rightPointer;

    while (leftPointer <= rightPointer) {
      const k = Math.floor((rightPointer + leftPointer) / 2);
      let count = 0;

      for (const pile of sortedPiles) {
        count += Math.ceil(pile / k);
      }

      if (count <= h) {
        result = k;
        rightPointer = k - 1;
      } else {
        leftPointer = k + 1;
      }
    }
    return result;
  }
}
