import Heap from '../09_堆结构Heap/06_堆结构Heap(二叉堆)'

// 1.封装PriorityNode
class PriorityNode<T> {
  priority: number
  value: T
  constructor(value: T, priority: number) {
    this.value = value
    this.priority = priority
  }

  valueOf() {
    return this.priority
  }
}


// 2.创建PriorityQueue
class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap()

  enqueue(value: T, priority: number) {
    const newNode = new PriorityNode(value, priority)
    this.heap.insert(newNode)
  }

  dequeue(): T | undefined {
    return this.heap.extract()?.value
  }

  peek(): T | undefined {
    return this.heap.peek()?.value
  }

  isEmpty() {
    return this.heap.isEmpty()
  }

  size() {
    return this.heap.size()
  }
}


const pQueue = new PriorityQueue<string>()
pQueue.enqueue("why", 98)
pQueue.enqueue("kobe", 90)
pQueue.enqueue("james", 105)
while (!pQueue.isEmpty()) {
  console.log(pQueue.dequeue())
}
