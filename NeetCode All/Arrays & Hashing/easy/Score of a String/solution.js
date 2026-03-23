class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  scoreOfString(s) {
    if (!s || s.length < 2 || s.length > 100) return 0;

    let score = 0;

    for (let i = 1; i < s.length; i++) {
      score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    }

    return score;
  }
}
