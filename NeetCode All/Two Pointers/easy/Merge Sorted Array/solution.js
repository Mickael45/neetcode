class Solution {
  /**
   * @param {number[]} nums1
   * @param {number} m
   * @param {number[]} nums2
   * @param {number} n
   * @return {void} Do not return anything, modify nums1 in-place instead.
   */
  merge(nums1, m, nums2, n) {
    if ((isNaN(m), m < 0 || m > 200)) return;
    if ((isNaN(n), n < 0 || n > 200)) return;
    if (!nums1 || !Array.isArray(nums1) || nums1.length !== m + n) return;
    if (!nums2 || !Array.isArray(nums2) || nums2.length !== n) return;

    for (let i = m; i < nums1.length; i++) {
      nums1[i] = nums2[n - 1];
      n--;
    }

    nums1.sort((a, b) => a - b);
  }
}
