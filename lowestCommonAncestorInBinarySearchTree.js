/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  lowestCommonAncestor(root, p, q) {
    if (root === null || p === null || q === null) {
      return null;
    }

    if (Math.max(p.val, q.val) < root.val) {
      return this.lowestCommonAncestor(root.left, p, q);
    } else if (Math.min(p.val, q.val) > root.val) {
      return this.lowestCommonAncestor(root.right, p, q);
    } else {
      return root;
    }
  }
}
