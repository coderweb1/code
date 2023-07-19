// import { swap, testSort } from "./utils"
import { testSort, swap, measureSort } from 'hy-algokit'

export default function bubbleSort(arr: number[]): number[] {
  const n = arr.length

  // 外层for循环: 0~n-1
  for (let i = 0; i < n; i++) {
    let swapped = false

    // 内层循环是找到最大值
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true
      }
    }

    if (!swapped) break
  }

  return arr
}

// 测试排序算法
// testSort(bubbleSort)

measureSort(bubbleSort, 100000)
