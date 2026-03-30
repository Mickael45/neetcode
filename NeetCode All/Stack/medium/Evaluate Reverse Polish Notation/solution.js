class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */

  operandMap = {
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  evalRPN(tokens) {
    const numbers = [];

    for (const token of tokens) {
      if (!isNaN(token)) numbers.push(token);
      else {
        const secondNumber = numbers.pop();
        const firstNumber = numbers.pop();

        numbers.push(this.operandMap[token](+firstNumber, +secondNumber));
      }
    }
    return numbers[0];
  }
}
