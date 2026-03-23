class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    if (!s || s.length < 1 || s.length > 1000) return 0;
    if (k < 0 || k > s.length) return 0;

    const characterMap = new Map();
    let leftPointer = 0;
    let mostFrequentCharacterLengthInTheWindow = 0;
    let longestString = 0;

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
      const character = s[rightPointer];

      characterMap.set(character, (characterMap.get(character) || 0) + 1);
      mostFrequentCharacterLengthInTheWindow = Math.max(
        mostFrequentCharacterLengthInTheWindow,
        characterMap.get(character),
      );
      while (
        rightPointer -
          leftPointer +
          1 -
          mostFrequentCharacterLengthInTheWindow >
        k
      )
        characterMap.set(
          s[leftPointer],
          characterMap.get(s[leftPointer++]) - 1,
        );

      longestString = Math.max(longestString, rightPointer - leftPointer + 1);
    }
    return longestString;
  }
}
