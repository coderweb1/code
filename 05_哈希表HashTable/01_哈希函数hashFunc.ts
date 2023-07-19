/**
 * 哈希函数, 将key映射成index
 * @param key 转换的key
 * @param max 数组的长度(最大的数值)
 * @returns 索引值
 */
function hashFunc(key: string, max: number): number {
  // 1.计算hashCode cats => 60337(27为底的时候)
  let hashCode = 0
  const length = key.length
  for (let i = 0; i < length; i++) {
    // 霍纳法则计算hashCode
    hashCode = 31 * hashCode + key.charCodeAt(i)
  }

  // 2.求出索引值
  const index = hashCode % max

  return index
}

// 测试哈希函数
// loadFactor = 4 / 7 = 0.57...
console.log(hashFunc("abc", 7))
console.log(hashFunc("cba", 7))
console.log(hashFunc("nba", 7))
console.log(hashFunc("mba", 7))


// loadFactor = 6 / 7 = 0.85...
console.log(hashFunc("aaa", 7))
console.log(hashFunc("bbb", 7))


export default hashFunc

