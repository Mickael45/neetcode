/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (!sentence1 || sentence1.length < 1 || sentence1.length > 100)
    return false;
  if (!sentence2 || sentence2.length < 1 || sentence2.length > 100)
    return false;
  if (sentence1.length > sentence2.length)
    return areSentencesSimilar(sentence2, sentence1);

  const shortestSplittedString = sentence1.split(" ");
  const longestSplittedString = sentence2.split(" ");
  let leftPointer = 0;
  let longestStringRightPointer = longestSplittedString.length - 1;
  let shortestStringRightPointer = shortestSplittedString.length - 1;

  while (
    leftPointer < shortestSplittedString.length &&
    shortestSplittedString[leftPointer] === longestSplittedString[leftPointer]
  )
    leftPointer++;

  while (
    shortestStringRightPointer >= 0 &&
    shortestSplittedString[shortestStringRightPointer] ===
      longestSplittedString[longestStringRightPointer]
  ) {
    longestStringRightPointer--;
    shortestStringRightPointer--;
  }

  return shortestStringRightPointer < leftPointer;
};
