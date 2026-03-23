class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {number}
   */
  appendCharacters(s, t) {
    if (!s || s.length < 1 || s.length > 100000) return 0;
    if (!t || t.length < 1 || t.length > 100000) return 0;

    const splittedT = t.split("");

    for (const character of s) {
      if (character === splittedT[0]) splittedT.shift();
    }

    return splittedT.length;
  }
}
