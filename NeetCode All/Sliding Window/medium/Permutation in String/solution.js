class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (!s2 || s2.length < 1 || s2.length > 1000) return false;
    if (!s1 || s1.length < 1 || s1.length > 1000 || s1.length > s2.length)
      false;

    const sortedS1 = s1.split("").sort().join("");

    for (let i = 0; i < s2.length - s1.length + 1; i++) {
      let threshold = 0;
      let subString = "";

      while (threshold < s1.length) subString += s2[i + threshold++];

      if (subString.split("").sort().join("") === sortedS1) return true;
    }

    return false;
  }
}
