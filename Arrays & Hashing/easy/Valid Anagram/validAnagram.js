class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (!s || !t || s.length !== t.length) return false;

    const counts = new Int16Array(256);

    for (let i = 0; i < s.length; i++) {
      counts[s.charCodeAt(i)]++;
      counts[t.charCodeAt(i)]--;
    }

    for (let i = 0; i < counts.length; i++) {
      if (counts[i] !== 0) return false;
    }

    return true;
  }
}
