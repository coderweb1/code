import ListNode from "./ListNode"

function swapPairs(head: ListNode | null): ListNode | null {
  // 1.创建虚拟节点
  const dummy = new ListNode(0)
  dummy.next = head

  // 2.创建current节点, 指向虚拟节点
  let current = dummy
  while (current.next && current.next.next) {
    // 将接下来的两个节点取出
    const node1 = current.next
    const node2 = current.next.next

    // 交换node1和node2的位置
    current.next = node2
    node1.next = node2.next
    node2.next = node1

    // 开始进行下一次的交换
    current = node1
  }

  return dummy.next
};

export {}