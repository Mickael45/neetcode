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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const newLinkedListHead = new ListNode()
        let currentNode = newLinkedListHead

        while (list1 && list2) {
            if (list1.val < list2.val) {
                currentNode.next = list1
                list1 = list1.next
            } else {
                currentNode.next = list2
                list2 = list2.next
            }
            currentNode = currentNode.next
        }

        currentNode.next = list1 || list2

        return newLinkedListHead.next
    }
}
