function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  // 记录每个组中的最小值
  const tails: number[] = []

  // 遍历每一个元素
  for (let i = 0; i < n; i++) {
    const num = nums[i]

    let left = 0
    let right = tails.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (num <= tails[mid]) {
        right = mid -1
      } else {
        left = mid + 1
      }
    }

    // 是否找到对应的位置
    if (left === tails.length) { // 没有找到能存放的位置
      tails.push(num)
    } else {
      tails[left] = num
    }
  }

  return tails.length
};


export {}