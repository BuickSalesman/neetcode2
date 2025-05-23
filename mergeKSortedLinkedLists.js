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
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    if (!lists || lists.length === 0) {
      return null;
    }

    while (lists.length > 1) {
      let merged = [];

      for (let i = 0; i < lists.length; i += 2) {
        let l1 = lists[i];
        let l2 = i + 1 < lists.length ? lists[i + 1] : null;
        merged.push(this.mergeList(l1, l2));
      }
      lists = merged;
    }
    return lists[0];
  }

  mergeList(l1, l2) {
    let dummy = new ListNode();
    let tail = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }

      tail = tail.next;
    }
    if (l1) {
      tail.next = l1;
    }

    if (l2) {
      tail.next = l2;
    }
    return dummy.next;
  }
}
