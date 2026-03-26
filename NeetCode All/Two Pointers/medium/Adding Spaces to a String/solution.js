/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  if (!s || s.length < 1 || s.length > 300000) return "";
  if (!spaces || spaces.length < 1 || spaces.length > 300000) return "";

  let spacePointer = 0;
  let spaceIndex = spaces[spacePointer++];
  let outputString = "";

  for (let i = 0; i < s.length; i++) {
    if (i === spaceIndex) {
      outputString += " ";
      spaceIndex = spaces[spacePointer++];
    }
    outputString += s[i];
  }
  return outputString;
};
