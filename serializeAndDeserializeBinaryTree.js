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

class Codec {
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
  serialize(root) {
    const res = [];
    this.dfsS(root, res);
    return res.join(",");
  }

  dfsS(node, res) {
    if (node === null) {
      res.push("N");
      return;
    }
    res.push(node.val.toString());
    this.dfsS(node.left, res);
    this.dfsS(node.right, res);
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data) {
    const vals = data.split(",");
    const i = { val: 0 };
    return this.dfsDS(vals, i);
  }

  dfsDS(vals, i) {
    if (vals[i.val] === "N") {
      i.val++;
      return null;
    }

    const node = new TreeNode(parseInt(vals[i.val]));
    i.val++;
    node.left = this.dfsDS(vals, i);
    node.right = this.dfsDS(vals, i);
    return node;
  }
}
