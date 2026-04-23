class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slowPointer = 0
        let slowPointer2 = 0
        let fastPointer = 0

        while (true) {
            fastPointer = nums[nums[fastPointer]]
            slowPointer = nums[slowPointer]

            if (fastPointer === slowPointer) break
        }

        while (true) {
            slowPointer = nums[slowPointer]
            slowPointer2 = nums[slowPointer2]
            
            if (slowPointer2 === slowPointer) return slowPointer
        }
    }
}
