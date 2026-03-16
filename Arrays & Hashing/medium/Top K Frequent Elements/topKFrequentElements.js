class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    if (!nums || !Array.isArray(nums) || nums.length < 1 || nums.length > 10000)
      return [];
    if (k < 1 || !k || k > new Set(nums).size) return [];

    const hashMap = {};

    for (const num of nums) {
      if (hashMap[num]) {
        hashMap[num]++;
      } else {
        hashMap[num] = 1;
      }
    }

    const keys = Object.entries(hashMap)
      .sort((a, b) => b[1] - a[1])
      .map(([key]) => key);
    const matches = [];

    for (let i = 0; i < k; i++) {
      matches.push(keys[i]);
    }
    return matches;
  }
}
