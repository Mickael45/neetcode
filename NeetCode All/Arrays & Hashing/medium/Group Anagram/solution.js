class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    if (!strs || !Array.isArray(strs) || strs.length < 1 || strs.length > 1000)
      return null;

    const anagramGroups = [];

    function isAnagram(s, t) {
      if (s.length !== t.length) return false;

      const counts = new Int16Array(256);

      for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i)]++;
        counts[t.charCodeAt(i)]--;
      }

      for (const count of counts) {
        if (count !== 0) return false;
      }
      return true;
    }

    for (const str of strs) {
      let matchCount = 0;

      for (let i = 0; i < anagramGroups.length; i++) {
        if (isAnagram(str, anagramGroups[i][0])) {
          anagramGroups[i].push(str);
          matchCount++;
        }
      }

      if (matchCount === 0) {
        anagramGroups.push([str]);
      }
    }
    return anagramGroups;
  }
}
