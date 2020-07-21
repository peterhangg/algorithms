/*
Reverse a singly linked list.

Example:
  Input: 1->2->3->4->5->NULL
  Output: 5->4->3->2->1->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = (head) => {
  let next = null;
  let prev = null;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

const recursiveReverseList = (head, prev = null) => {
  if (!head) return prev;
  let next = head.next;
  head.next = prev;
  return recursiveReverseList(next, head)
};