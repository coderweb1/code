function maxValue(grid: number[][]): number {
  // 1.获取m排n列
  const m = grid.length
  const n = grid[0].length

  // 2.初始化dp保存每个位置的最大值
  const dp: number[][] = Array.from({ length: m }, () => {
    return Array(n).fill(0)
  })
  dp[0][0] = grid[0][0]

  // 3.初始化值
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0]
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + grid[0][j]
  }

  // 4.状态转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.max(dp[i-1][j], dp[i][j-1])
    }
  }

  return dp[m-1][n-1]
};

export {}