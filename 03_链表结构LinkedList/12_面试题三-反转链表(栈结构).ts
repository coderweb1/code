import ListNode from "./面试题_ListNode"

function reverseList(head: ListNode | null): ListNode | null {
  // 什么情况下链表不需要处理?
  // 1.head本身为null的情况
  if (head === null) return null
  // 2.只有head一个节点
  if (head.next === null) return head

  // 数组模拟栈结构
  const stack: ListNode[] = []
  let current: ListNode | null = head
  while (current) {
    stack.push(current)
    current = current.next
  }

  // 以此从栈结构中取出元素, 放到一个新的链表中
  const newHead: ListNode = stack.pop()!
  let newHeadCurrent = newHead
  while (stack.length) {
    const node = stack.pop()!
    newHeadCurrent.next = node
    newHeadCurrent = newHeadCurrent.next
  }

  // 注意: 获取到最后一个节点时, 一定要将节点的next置为null
  newHeadCurrent.next = null

  return newHead
};


// 模拟数据进行测试
const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const newHead = reverseList(node1)

let current = newHead
while (current) {
  console.log(current.val)
  current = current.next
}


export {}

