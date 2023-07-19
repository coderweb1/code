import LinkedList from "./01_实现单向链表LinkedList";

class CircularLinkedList<T> extends LinkedList<T> {
  // 重新实现的方法: append方法
  append(value: T): void {
    super.append(value)
    // 拿到最后一个节点next指向第一个节点
    this.tail!.next = this.head
  }

  insert(value: T, position: number): boolean {
    const isSuccess = super.insert(value, position)
    if (isSuccess && (position === this.length - 1 || position === 0)) {
      this.tail!.next = this.head
    }
    return isSuccess
  }

  removeAt(position: number): T | null {
    const value = super.removeAt(position)
    if (value && this.tail && (position === 0 || position === this.length)) {
      this.tail.next = this.head
    }

    return value
  }
}

const cLinkedList = new CircularLinkedList<string>()
console.log('------------ 测试append ------------')
cLinkedList.append("aaa")
cLinkedList.append("bbb")
cLinkedList.append("ccc")
cLinkedList.append("ddd")
cLinkedList.traverse()

console.log('------------ 测试insert ------------')
cLinkedList.insert("abc", 0)
cLinkedList.traverse()
cLinkedList.insert("cba", 2)
cLinkedList.insert("nba", 6)
cLinkedList.traverse()

// // 测试删除节点
console.log('------------ 测试removeAt ------------')
cLinkedList.removeAt(0)
cLinkedList.traverse()
cLinkedList.removeAt(2)
cLinkedList.traverse()
cLinkedList.removeAt(4)
cLinkedList.traverse()

console.log('------------ 测试get ------------')
console.log(cLinkedList.get(0))
console.log(cLinkedList.get(1))
console.log(cLinkedList.get(2))

console.log('------------ 测试update ------------')
cLinkedList.update("why", 1)
cLinkedList.update("kobe", 2)
cLinkedList.traverse()

console.log('------------ 测试indexOf ------------')
console.log(cLinkedList.indexOf("cba"))
console.log(cLinkedList.indexOf("why"))
console.log(cLinkedList.indexOf("kobe"))
console.log(cLinkedList.indexOf("james"))


console.log('------------ 测试remove ------------')
cLinkedList.remove("why")
console.log(cLinkedList.remove("cba"))
cLinkedList.remove("kobe")
cLinkedList.traverse()
console.log(cLinkedList.isEmpty())
console.log(cLinkedList.size())
