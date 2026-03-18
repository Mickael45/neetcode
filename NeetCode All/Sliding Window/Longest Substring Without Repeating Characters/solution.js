class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    if (!s || s.length < 0 || s.length > 1000) return 0;

    const map = new Map();
    let leftPointer = 0;
    let longestString = 0;

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
      const currentCharacter = s[rightPointer];

      if (map.has(currentCharacter))
        leftPointer = Math.max(map.get(currentCharacter) + 1, leftPointer);

      map.set(currentCharacter, rightPointer);
      longestString = Math.max(longestString, rightPointer - leftPointer + 1);
    }

    return longestString;
  }
}
