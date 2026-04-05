class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        return nums.sort((a, b) => a - b)[0]
    }
}
