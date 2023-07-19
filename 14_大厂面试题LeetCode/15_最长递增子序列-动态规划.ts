function lengthOfLIS(nums: number[]): number {
  const n = nums.length

  // 1.定义状态dp 2.初始化值
  const dp: number[] = new Array(n).fill(1)

  // 3.状态转移方程
  let max = dp[0]
  for (let i = 1; i < n; i++) {
    // 和前面所有的元素进行一次比较(找到比我的小的元素)
    for (let j = 0; j < i; j++) {
      // 找到比i位置小的数字
      if (nums[j] < nums[i]) {
        // 状态转移方程
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }

    max = Math.max(max, dp[i])
  }

  return max
};


export {}