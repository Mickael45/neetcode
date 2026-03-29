/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
  recursiveGuess(currentGuess, min, max) {
    const match = guess(currentGuess);

    if (match === 0) return currentGuess;
    else if (match === -1)
      return this.recursiveGuess(
        Math.floor((currentGuess - 1 + min) / 2),
        min,
        currentGuess - 1,
      );
    else
      return this.recursiveGuess(
        Math.floor(max + currentGuess + 1 / 2),
        currentGuess + 1,
        max,
      );
  }
  /**
   * @param {number} n
   * @return {number}
   */
  guessNumber(n) {
    return this.recursiveGuess(n, 1, n);
  }
}
