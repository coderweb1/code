import { BSTree, TreeNode } from "./00_二叉搜索树BSTree";
import AVLTreeNode from "./04_封装AVLTreeNode(左旋转操作)";

class AVLTree<T> extends BSTree<T> {
  // 重写调用的createNode方法
  protected createNode(value: T): TreeNode<T> {
    return new AVLTreeNode(value)
  }

  // 如何去找到不平衡的节点
  checkBalance(node: AVLTreeNode<T>) {
    let current = node.parent
    while (current) {
      if (!current.isBalanced) {
        this.rebalance(current)
      }
      current = current.parent
    }
  }

  // 假设已经找到了, 那么我们如何让这个节点变的平衡
  /**
   * 根据不平衡的节点的情况(LL/RR/LR/RL)让子树平衡
   * @param root 找到的不平衡的节点
   */
  rebalance(root: AVLTreeNode<T>) {
    const pivot = root.higherChild
    const current = pivot?.higherChild

    let resultNode: AVLTreeNode<T> | null = null
    if (pivot?.isLeft) { // L: left
      if (current?.isLeft) { // LL: left left
        resultNode = root.rightRotation()
      } else { // LR: left right
        pivot.leftRotation()
        resultNode = root.rightRotation()
      }
    } else { // R: right
      if (current?.isLeft) { // RL: right left
        pivot?.rightRotation()
        resultNode = root.leftRotation()
      } else { // RR: right right
        resultNode = root.leftRotation()
      }
    }

    // 判断返回的pivot是否有父节点
    if (!resultNode.parent) {
      this.root = resultNode
    }
  }
}

const avlTree = new AVLTree<number>()

for (let i = 0; i < 20; i++) {
  avlTree.insert(Math.floor(Math.random() * 200))
}

avlTree.print()

