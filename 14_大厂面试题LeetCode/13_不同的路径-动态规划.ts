function uniquePaths(m: number, n: number): number {
  // 1.定义状态dp的二维数组
  const dp: number[][] = Array.from({ length: m }, () => {
    return Array(n).fill(0)
  })

  // 2.设置初始化值
  /**
   * [
   *   [1, 1, 1, 1, 1, 1, 1],
   *   [1, 0, 0, 0, 0, 0, 0],
   *   [1, 0, 0, 0, 0, 0, 0]
   * ]
   */
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  // 3.状态转移求解后面位置的值
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }

  // 4.最终的结果计算
  return dp[m-1][n-1]
}
