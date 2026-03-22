class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    if (!s || s.length < 1 || s.length > 1000) return false;

    const validPairs = {
      "}": "{",
      ")": "(",
      "]": "[",
    };
    const openingCharacters = Object.values(validPairs);
    const closingCharacters = Object.keys(validPairs);
    const stack = [];

    for (const char of s) {
      if (openingCharacters.includes(char)) stack.push(char);
      else if (
        closingCharacters.includes(char) &&
        stack[stack.length - 1] === validPairs[char]
      )
        stack.pop(char);
      else return false;
    }

    return stack.length === 0;
  }
}
