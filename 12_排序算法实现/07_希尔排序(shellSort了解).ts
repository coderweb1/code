import { testSort } from 'hy-algokit'

// 希尔排序
export default function shellSort(arr: number[]): number[] {
  const n = arr.length

  // 选择不同的增量(步长/间隔)
  let gap = Math.floor(n / 2)
  
  // 6 - 3 - 1
  // 1.第一层循环: 不断改变步长的过程
  while (gap > 0) {
    // 获取到不同的gap, 使用gap进行插入排序
    // 2.第二层循环: 找到不同的数列集合进行插入排序的操作
    for (let i = gap; i < n; i++) {
      let j = i
      const num = arr[i]

      // 第三层循环: while循环, 对数列进行插入排序的过程
      // 使用num向前去找到一个比num小的值
      while (j > gap - 1 && num < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j = j - gap
      }

      arr[j] = num
    }

    gap = Math.floor(gap / 2)
  }

  return arr
}

// const arr = [81, 94, 11, 96, 12, 35, 17, 95, 28, 58, 41, 75, 15]
// console.log(shellSort(arr))

testSort(shellSort)
