class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    if (!strs || !Array.isArray(strs) || strs.length < 0 || strs.leght > 100)
      return "";

    let mergedStrs = "";

    for (let str of strs) {
      mergedStrs += str.length + "#" + str;
    }

    return mergedStrs;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const strs = [];
    let i = 0;

    while (i < str.length) {
      let length = "";

      for (let j = i; str[j] !== "#"; j++) {
        length += str[j];
      }
      const intLength = parseInt(length);
      const numberFlagOffset = i + length.length + 1;

      strs.push(str.substring(numberFlagOffset, numberFlagOffset + intLength));
      i = numberFlagOffset + intLength;
    }

    return strs;
  }
}
