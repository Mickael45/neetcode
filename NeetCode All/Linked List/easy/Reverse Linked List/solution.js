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
   * @return {ListNode}
   */
  reverseList(head) {
    let currentNode = head;
    let previousNode = null;

    while (currentNode) {
      let nextNode = currentNode.next || null;

      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    return previousNode;
  }
}
