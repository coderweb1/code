class CQueue {
  private stack1: number[] = []
  private stack2: number[] = []

  constructor() {}

  appendTail(value: number): void {
    this.stack1.push(value)
  }

  deleteHead(): number {
    // 1.判断stack2中是否有数据
    if (this.stack2.length > 0) {
      return this.stack2.pop()!
    } 

    // 2.判断stack1中是否有数据
    else if (this.stack1.length > 0) {
      // 从stack1中取出所有的数据放到stack2中
      while (this.stack1.length > 0) {
        const item = this.stack1.pop()!
        this.stack2.push(item)
      }
      return this.stack2.pop()!
    } 
    
    // 3.数据全部移除完毕, 返回-1
    else {
      return -1
    }
  }
}

export {}