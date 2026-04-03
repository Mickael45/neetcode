class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    const columnSize = matrix[0].length;
    const rowSize = matrix.length;
    let leftPointer = 0;
    let rightPointer = columnSize * rowSize - 1;

    while (leftPointer <= rightPointer) {
      const currentPointer =
        leftPointer + Math.floor((rightPointer - leftPointer) / 2);
      const rowIndex = Math.floor(currentPointer / columnSize);
      const columnIndex = currentPointer % columnSize;
      const number = matrix[rowIndex][columnIndex];

      if (target < number) rightPointer = currentPointer - 1;
      else if (target > number) leftPointer = currentPointer + 1;
      else return true;
    }
    return false;
  }
}
