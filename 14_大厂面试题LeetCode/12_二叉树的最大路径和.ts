import TreeNode from './TreeNode'

function maxPathSum(root: TreeNode | null): number {

  let maxSum = -Infinity

  // 定义内部函数进行递归的操作
  function dfs(node: TreeNode | null): number {
    if (!node) return 0

    // 左右子树计算可以提供的非0最大值
    const leftSum = Math.max(dfs(node.left), 0)
    const rightSum = Math.max(dfs(node.right), 0)

    // 当前节点中能获取到的最大值
    const pathSum = node.val + leftSum + rightSum
    maxSum = Math.max(pathSum, maxSum)

    // 返回当前节点能给父节点提供的最大值
    return node.val + Math.max(leftSum, rightSum)
  }

  dfs(root)

  return maxSum
};

export {}