import TreeNode from './TreeNode'

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null

  // root不为空
  const left = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(left)

  return root
};

export {}