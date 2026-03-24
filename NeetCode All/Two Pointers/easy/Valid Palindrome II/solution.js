class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  validPalindrome(s) {
    if (!s || s.length < 1 || s.length > 1000) return false;

    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
      const leftCharacter = s[leftPointer];
      const rightCharacter = s[rightPointer];

      if (leftCharacter !== rightCharacter)
        return (
          this.isPalindrome(s, leftPointer + 1, rightPointer) ||
          this.isPalindrome(s, leftPointer, rightPointer - 1)
        );

      rightPointer--;
      leftPointer++;
    }
    return true;
  }

  isPalindrome(s, leftPointer, rightPointer) {
    while (leftPointer < rightPointer) {
      const leftCharacter = s[leftPointer++];
      const rightCharacter = s[rightPointer--];

      if (leftCharacter !== rightCharacter) return false;
    }
    return true;
  }
}
