import TreeNode from './TreeNode'

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  // 1.创建stack栈结构
  const stack = [root]

  // 2.从栈中不断的取出节点, 对节点的左右子节点进行交换
  while (stack.length) {
    const current = stack.pop()!

    // 对current节点左右交换位置
    const temp = current.left
    current.left = current.right
    current.right = temp

    // 将子节点加入到栈中
    if (current.left) {
      stack.push(current.left)
    }
    if (current.right) {
      stack.push(current.right)
    }
  }

  return root
};

export {}