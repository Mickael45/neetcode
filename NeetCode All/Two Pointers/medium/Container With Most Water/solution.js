class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    if (
      !heights ||
      !Array.isArray(heights) ||
      heights.length < 2 ||
      heights.length > 1000
    )
      return 0;

    let startIndex = 0;
    let endIndex = heights.length;
    let maxArea = 0;

    while (startIndex < endIndex) {
      const startHeight = heights[startIndex];
      const endHeight = heights[endIndex];
      const area = Math.min(startHeight, endHeight) * (endIndex - startIndex);

      if (area > maxArea) maxArea = area;
      if (startHeight < endHeight) startIndex++;
      else endIndex--;
    }
    return maxArea;
  }
}
