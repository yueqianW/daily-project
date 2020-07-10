
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildBST = (nums, start, end) => {
    const mid = (start + end) >>> 1;
    const root = new TreeNode(nums[mid]);

    root.left = buildBST(nums, start, mid - 1);
    root.right = buildBST(nums, mid + 1, end);
    console.log(root)
    return root;
  }
};

sortedArrayToBST([1, 8, 7, -5, 6])