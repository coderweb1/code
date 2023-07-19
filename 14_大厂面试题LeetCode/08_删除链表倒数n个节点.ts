import ListNode from "./ListNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

  // 1.创建虚拟节点
  const dummy = new ListNode(0)
  dummy.next = head

  // 2.创建双指针(快慢指针)
  let slow = dummy
  let fast = dummy

  // 3.先让快指针移动n+1个位置
  for (let i = 0; i <= n; i++) {
    fast = fast.next!
  }

  // 4.两个指针一起移动
  while (fast) {
    fast = fast.next!
    slow = slow.next!
  }

  // 5.slow指向的一定是要删除节点的前一个节点
  slow.next = slow.next!.next

  return dummy.next
};

export {}

