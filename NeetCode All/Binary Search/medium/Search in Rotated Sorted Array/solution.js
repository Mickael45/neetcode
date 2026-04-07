class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let leftPointer = 0
        let rightPointer = nums.length - 1

        while (leftPointer <= rightPointer) {
            const midIndex = Math.floor((leftPointer + rightPointer) / 2) 
            const midValue = nums[midIndex]

            if (midValue === target) return midIndex

            const rightValue = nums[rightPointer]
            const leftValue = nums[leftPointer]

            if (leftValue <= midValue) {
                if (target > midValue || target < leftValue) leftPointer = midIndex + 1
                else rightPointer = midIndex - 1
            }
            else {
                if (target < midValue || target > rightValue) rightPointer = midIndex - 1
                else leftPointer = midIndex + 1
            }
        }
        return -1
    }
}
