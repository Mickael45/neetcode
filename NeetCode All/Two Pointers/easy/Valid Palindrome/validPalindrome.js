class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    if (!s || s.length < 1 || s.length > 1000) return false;

    const sWithoutPonctuation = s.replace(/[^a-zA-Z0-9]/g, "");
    const normalizedStrs = sWithoutPonctuation.split("");
    const reversedStrs = sWithoutPonctuation.split("").reverse();

    return (
      normalizedStrs.join("").toLowerCase() ===
      reversedStrs.join("").toLowerCase()
    );
  }
}
