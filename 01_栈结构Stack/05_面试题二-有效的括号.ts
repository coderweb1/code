import ArrayStack from './02_实现栈结构Stack(重构)'

function isValid(s: string): boolean {
  // 1.创建栈结构
  const stack: string[] = []

  // 2.遍历s中的所有的括号
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    switch (c) {
      case "(":
        stack.push(")")
        break
      case "{":
        stack.push("}")
        break
      case "[":
        stack.push("]")
        break
      default:
        if (c !== stack.pop()) return false
        break
    }
  }

  return stack.length === 0
}

console.log(isValid("()"))
console.log(isValid("([]){}"))
console.log(isValid("(]"))

export {}
