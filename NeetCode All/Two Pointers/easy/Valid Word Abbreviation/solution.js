class Solution {
  /**
   * @param {string} word
   * @param {string} abbr
   * @return {boolean}
   */
  validWordAbbreviation(word, abbr) {
    if (!word || word.length < 1 || word.length > 100) return false;
    if (
      !abbr ||
      abbr.length < 1 ||
      abbr.length > 100 ||
      abbr.length > word.length
    )
      return false;

    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < word.length) {
      let jump = "";

      if (word[leftPointer] === abbr[rightPointer]) {
        leftPointer++;
        rightPointer++;
        continue;
      }
      if (word[leftPointer] !== abbr[rightPointer] && isNaN(abbr[rightPointer]))
        return false;

      while (!isNaN(abbr[rightPointer])) {
        const currentCypher = abbr[rightPointer];

        jump += currentCypher;
        rightPointer++;
      }

      if (jump[0] === "0" || Number(jump) + leftPointer > word.length)
        return false;
      leftPointer += Number(jump);
    }

    return leftPointer === word.length && rightPointer === abbr.length;
  }
}
