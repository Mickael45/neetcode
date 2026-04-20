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
        if (p.val < root.val && q.val > root.val) return root
        if (p.val > root.val && q.val < root.val) return root
        if (p.val === root.val || q.val === root.val) return root

        let lca = root

        if (p.val < root.val && root.left) lca = this.lowestCommonAncestor(root.left, p, q) 
        else if (root.right) lca = this.lowestCommonAncestor(root.right, p, q) 

        return lca
    }
}

