/**
 * 根据传入的数字, 判断是否是一个质数
 * @param num 要判断的数字
 * @returns 是否是一个质数
 */
function isPrime(num: number): boolean {
  // 质数的特点: 只能被1和num整除
  // 如果传入的是8
  // 2~7
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }

  // 2~7都遍历完成后, 依然是没有返回false
  return true
}


console.log(isPrime(8))
console.log(isPrime(14))
console.log(isPrime(15))

console.log(isPrime(17))
console.log(isPrime(23))

export {}
