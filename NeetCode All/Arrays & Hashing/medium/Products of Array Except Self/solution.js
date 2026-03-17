class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    if (!nums || !Array.isArray(nums) || nums.length < 2 || nums.length > 1000)
      return [];

    let produces = Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
      produces = produces.map((product, index) =>
        index !== i ? product * nums[i] : product,
      );
    }

    return produces;
  }
}
