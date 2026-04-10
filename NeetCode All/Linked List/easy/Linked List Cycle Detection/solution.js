/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const hashSet = new Set()

        while (head) {
            const value = head.val

            if (hashSet.has(value) && head.next) return true

            hashSet.add(value)
            head = head.next
        }
        return false
    }
}
