function evalRPN(tokens: string[]): number {
  const stack: number[] = []

  // 遍历所有的tokens
  for (const token of tokens) {
    if (token === "+") {
      const num2 = stack.pop()!
      const num1 = stack.pop()!
      const res = num1 + num2
      stack.push(res)
    } else if (token === "-") {
      const num2 = stack.pop()!
      const num1 = stack.pop()!
      const res = num1 - num2
      stack.push(res)
    } else if (token === "*") {
      const num2 = stack.pop()!
      const num1 = stack.pop()!
      const res = num1 * num2
      stack.push(res)
    } else if (token === "/") {
      const num2 = stack.pop()!
      const num1 = stack.pop()!
      const res = Math.trunc(num1 / num2)
      stack.push(res)
    } else {
      stack.push(Number(token))
    }
  }

  return stack.pop()!
};

console.log(evalRPN(["4","13","5","/","+"]))

export {}
