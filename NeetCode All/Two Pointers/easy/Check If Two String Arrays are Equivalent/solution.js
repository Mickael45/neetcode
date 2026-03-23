/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  if (
    !word1 ||
    !Array.isArray(word1) ||
    word1.length < 1 ||
    word1.length > 10000
  )
    return false;
  if (
    !word2 ||
    !Array.isArray(word2) ||
    word2.length < 1 ||
    word2.length > 10000
  )
    return false;

  return word1.join("") === word2.join("");
};
