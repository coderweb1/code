import { BSTree, TreeNode } from "./00_二叉搜索树BSTree";
import AVLTreeNode from "./04_封装AVLTreeNode(左旋转操作)";

class AVLTree<T> extends BSTree<T> {
  // 重写调用的createNode方法
  protected createNode(value: T): TreeNode<T> {
    return new AVLTreeNode(value)
  }

  // 如何去找到不平衡的节点
  checkBalance(node: AVLTreeNode<T>, isAdd = true) {
    let current = node.parent
    while (current) {
      if (!current.isBalanced) {
        this.rebalance(current)
        // 这个位置时旋转完成后的操作
        // break决定不会进一步去查找父节点有没有平衡的情况了
        // 添加的情况是不需要进一步向上查找的, 直接break
        // 删除的情况是需要进一步向上查找的, 不能break
        if (isAdd) break
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


// 1.随机的插入和删除
// const delNums: number[] = []
// for (let i = 0; i < 20; i++) {
//   const randomNum = Math.floor(Math.random() * 200)
//   if (i % 2 === 0 && delNums.length < 10) {
//     delNums.push(randomNum)
//   }
//   avlTree.insert(randomNum)
// }

// avlTree.print()

// console.log(delNums)
// for (const delNum of delNums) {
//   avlTree.remove(delNum)
// }


// 2.自己模拟删除
// avlTree.insert(50)
// avlTree.insert(25)
// avlTree.insert(100)
// avlTree.insert(150)
// avlTree.insert(12)

// avlTree.print()

// avlTree.remove(25)
// avlTree.remove(12)
// avlTree.print()

