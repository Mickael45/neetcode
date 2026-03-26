/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  if (!code || !Array.isArray(code) || code.length < 1 || code.length > 100)
    return [];
  if (k < -(code.length - 1) || k > code.legth - 1) return [];

  const codeLength = code.length;
  const decryptedCode = Array(codeLength).fill(0);

  if (k === 0) return decryptedCode;

  if (k > 0) {
    for (let i = 0; i < codeLength; i++) {
      const windowStart = (i + 1) % codeLength;

      for (let j = windowStart; j < k + windowStart; j++)
        decryptedCode[i] += code[j % codeLength];
    }
    return decryptedCode;
  }

  for (let i = 0; i < codeLength; i++) {
    const windowStart = (codeLength + i - 1) % codeLength;

    for (let j = windowStart; j - windowStart > k; j--) {
      const adjustedJ =
        j < 0 ? (codeLength - j * -1) % codeLength : j % codeLength;

      decryptedCode[i] += code[adjustedJ];
    }
  }
  return decryptedCode;
};
