interface Employee {
  name: string
  age?: number
  lastName: string
  work: number | null
}

type NamedEmployee = Pick<Employee, 'name' | 'lastName'>
type NamedEmployeeTwo = Omit<Employee, 'age'>
type OptionalEmployee = Partial<Employee>
type RequiredEmployee = Required<Employee>
type NonNullableEmployee = NonNullable<Employee>

type Basket = Record<string, number>

const basket: Basket = {
  foo: 1,
  bar: 2,
  // @ts-expect-error
  baz: 'qux',
}

export {}
