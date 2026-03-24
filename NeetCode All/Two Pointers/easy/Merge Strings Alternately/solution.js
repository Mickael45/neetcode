class Solution {
  /**
   * @param {string} word1
   * @param {string} word2
   * @return {string}
   */
  mergeAlternately(word1, word2) {
    if (!word1 || word1.length < 1 || word1.length > 100) return "";
    if (!word2 || word2.length < 1 || word2.length > 100) return "";

    const word1Length = word1.length;
    const word2Length = word2.length;
    const longestWordLength = Math.max(word1Length, word2Length);
    let output = "";

    for (let i = 0; i < longestWordLength; i++) {
      output += i >= word1.length ? "" : word1[i];
      output += i >= word2.length ? "" : word2[i];
    }

    return output;
  }
}
d;
