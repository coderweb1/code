class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  valueOf() {
    return this.age
  }
}

// 创建Person对象
const p1 = new Person("why", 18)
const p2 = new Person("kobe", 31)

console.log(p1 < p2)

const p3 = new Person("james", 26)
console.log(p2 < p3) // false
console.log(p2 > p3) // true

const p4 = new Person("curry", 26)

console.log(p3 === p4) // false
