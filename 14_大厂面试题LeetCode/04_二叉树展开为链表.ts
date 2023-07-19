import TreeNode from "./TreeNode";

function flatten(root: TreeNode | null): void {
  // 边界判断
  if (!root) return

  // 栈结构
  const stack = [root]
  let previous: TreeNode | null = null

  while (stack.length) {
    const current = stack.pop()!

    if (previous) {
      previous.right = current
      previous.left = null
    }

    // 将左右两个的节点压入到栈中
    const left = current.left
    const right = current.right
    if (right) {
      stack.push(right)
    }
    if (left) {
      stack.push(left)
    }

    previous = current
  }
};

export {}
