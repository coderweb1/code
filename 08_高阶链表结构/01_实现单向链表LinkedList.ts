import ILinkedList from "./ILinkedList"
import { Node } from './LinkedNode'


// 2.创建LinkedList的类
export default class LinkedList<T> implements ILinkedList<T> {
  protected head: Node<T> | null = null
  protected length: number = 0

  // 新增属性: 总是指向链表的位置
  protected tail: Node<T> | null = null

  size() {
    return this.length
  }

  peek(): T | undefined {
    return this.head?.value
  }

  // 封装私有方法
  // 根据position获取到当前的节点(不是节点的value, 而是获取节点)
  protected getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while (index ++ < position && current) {
      current = current.next
    }
    return current
  }

  // 判断是否是最后一个节点
  private isTail(node: Node<T>) {
    return this.tail === node
  }

  // 追加节点
  append(value: T) {
    // 1.根据value创建一个新节点
    const newNode = new Node(value)

    // 2.判断this.head是否为null
    if (!this.head) {
      this.head = newNode
    } else {
      this.tail!.next = newNode
    }
    this.tail = newNode

    // 3.size++
    this.length++
  }

  // 遍历链表的方法
  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)
      if (this.isTail(current)) { // 已经遍历最后一个接地那
        current = null
      } else { // 不是最后一个节点
        current = current.next
      }
    }

    // 循环链表
    if (this.head && this.tail?.next === this.head) {
      values.push(this.head.value)
    }

    console.log(values.join("->"))
  }

  // 插入方法:
  insert(value: T, position: number): boolean {
    // 1.越界的判断
    if (position < 0 || position > this.length) return false

    // 2.根据value创建新的节点
    const newNode = new Node(value)

    // 3.判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)
      newNode.next = previous!.next
      previous!.next = newNode

      if (position === this.length) {
        this.tail = newNode
      }
    }
    this.length++

    return true
  }

  // 删除方法:
  removeAt(position: number): T | null {
    // 1.越界的判断
    if (position < 0 || position >= this.length) return null

    // 2.判断是否是删除第一个节点
    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null

      if (this.length === 1) {
        this.tail = null
      }
    } else {
      const previous = this.getNode(position - 1)
      current = previous!.next
      previous!.next = previous?.next?.next ?? null

      if (position === this.length - 1) {
        this.tail = previous
      }
    }

    this.length--

    return current?.value ?? null
  }

  // 获取方法:
  get(position: number): T | null {
    // 越界问题
    if (position < 0 || position >= this.length) return null

    // 2.查找元素, 并且范围元素
    return this.getNode(position)?.value ?? null
  }

  // 更新方法:
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.length) return false
    // 获取对应位置的节点, 直接更新即可
    const currentNode = this.getNode(position)
    currentNode!.value = value
    return true
  }

  // 根据值, 获取对应位置的索引
  indexOf(value: T): number {
    // 从第一个节点开始, 向后遍历
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      
      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next
      }

      index++
    }

    return -1
  }

  // 删除方法: 根据value删除节点
  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  // 判读单链表是否为空的方法
  isEmpty() {
    return this.length === 0
  }
}

// const linkedList = new LinkedList<string>()
// console.log('------------ 测试append ------------')
// linkedList.append("aaa")
// linkedList.append("bbb")
// linkedList.append("ccc")
// linkedList.append("ddd")
// linkedList.traverse()

// console.log('------------ 测试insert ------------')
// linkedList.insert("abc", 0)
// linkedList.traverse()
// linkedList.insert("cba", 2)
// linkedList.insert("nba", 6)
// linkedList.traverse()

// // 测试删除节点
// console.log('------------ 测试removeAt ------------')
// linkedList.removeAt(0)
// linkedList.removeAt(0)
// linkedList.traverse()

// console.log(linkedList.removeAt(2))
// linkedList.traverse()
// console.log(linkedList.removeAt(3))
// linkedList.traverse()

// console.log('------------ 测试get ------------')
// console.log(linkedList.get(0))
// console.log(linkedList.get(1))
// console.log(linkedList.get(2))

// console.log('------------ 测试update ------------')
// linkedList.update("why", 1)
// linkedList.update("kobe", 2)


// console.log('------------ 测试indexOf ------------')
// console.log(linkedList.indexOf("cba"))
// console.log(linkedList.indexOf("why"))
// console.log(linkedList.indexOf("kobe"))
// console.log(linkedList.indexOf("james"))


// console.log('------------ 测试remove ------------')
// linkedList.remove("why")
// linkedList.remove("cba")
// linkedList.remove("kobe")
// linkedList.traverse()
// console.log(linkedList.isEmpty())

export {}
