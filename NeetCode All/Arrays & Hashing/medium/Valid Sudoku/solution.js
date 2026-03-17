class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */

  isValidSudoku(board) {
    if (!board || !Array.isArray(board) || board.length !== 9) return false;

    function isSuiteValid(suite) {
      const trimmedSuite = suite.filter((slot) => slot !== ".");
      const suiteSet = new Set(trimmedSuite);

      return trimmedSuite.length === suiteSet.size;
    }

    function areRowsValid() {
      for (const row of board) {
        if (!isSuiteValid(row)) return false;
      }
      return true;
    }

    function areColumnsValid() {
      for (let column = 0; column < 9; column++) {
        let currentColumn = [];

        for (let row = 0; row < 9; row++) {
          currentColumn.push(board[row][column]);
        }
        if (!isSuiteValid(currentColumn)) return false;
      }

      return true;
    }

    function areSquaresValid() {
      const roots = [
        [0, 0],
        [0, 3],
        [0, 6],
        [3, 0],
        [3, 3],
        [3, 6],
        [6, 0],
        [6, 3],
        [6, 6],
      ];

      for (const [row, column] of roots) {
        const currentSquare = [];

        for (let j = 0; j < 9; j++) {
          currentSquare.push(board[row + Math.floor(j / 3)][column + (j % 3)]);
        }
        if (!isSuiteValid(currentSquare)) return false;
      }

      return true;
    }

    return areRowsValid() && areColumnsValid() && areSquaresValid();
  }
}
