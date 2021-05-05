interface Employee {
  name: string
  age: number
  lastName: string
}

type NamedEmployee = Pick<Employee, 'name' | 'lastName'>
type NamedEmployeeTwo = Omit<Employee, 'age'>

const namedEmployee: NamedEmployee = {
  name: 'foo',
  lastName: 'bar',
}

console.log(namedEmployee)

const namedEmployeeTwo: NamedEmployeeTwo = {
  name: 'foo',
  lastName: 'bar',
}

console.log(namedEmployeeTwo)

type Basket = Record<string, number>

const basket: Basket = {
  foo: 1,
  bar: 2,
  // @ts-expect-error
  baz: 'qux',
}

console.log(basket)

export {}
