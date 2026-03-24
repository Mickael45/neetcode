/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  if (!nums1 || !Array.isArray(nums1) || nums1.length < 1 || nums1.length > 200)
    return [];
  if (!nums2 || !Array.isArray(nums2) || nums2.length < 1 || nums2.length > 200)
    return [];

  const numsHash = {};

  for (const [index, value] of nums1) {
    numsHash[index] = value;
  }

  for (const [index, value] of nums2) {
    if (numsHash[index]) numsHash[index] += value;
    else numsHash[index] = value;
  }

  const resultArray = Object.entries(numsHash).map(([key, value]) => [
    +key,
    value,
  ]);

  return resultArray;
};
