class Solution {
  /**
   * @param {character[]} s
   * @return {void} Do not return anything, modify s in-place instead.
   */
  reverseString(s) {
    if (!s || !Array.isArray(s) || s.length < 1 || s.length > 100000) return [];

    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
      const leftCharacter = s[leftPointer];

      s[leftPointer++] = s[rightPointer];
      s[rightPointer--] = leftCharacter;
    }
  }
}
