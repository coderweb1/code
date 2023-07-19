function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length

  // 窗口双端队列结构
  const deque: number[] = []
  const res: number[] = []

  // 遍历每一个元素
  for (let i = 0; i < n; i++) {
    // 将元素放入到队列的尾部
    while (deque.length && nums[i] > nums[deque[deque.length - 1]]) {
      deque.pop()
    }
    deque.push(i)

    // 判断目前队列的头部元素的索引是否在范围之内
    while (deque[0] <= i - k) {
      deque.shift()
    }

    // 获取到头部的值, 作为最大值
    if (i >= k - 1) {
      const max = nums[deque[0]]
      res.push(max)
    }
  }

  return res
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))

export {}
