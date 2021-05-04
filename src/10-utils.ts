interface Person {
  name: string
  age: number
  lastName: string
}

type NamedPerson = Pick<Person, 'name' | 'lastName'>
type NamedPersonTwo = Omit<Person, 'age'>

const namedPerson: NamedPerson = {
  name: 'foo',
  lastName: 'bar',
}

const namedPersonTwo: NamedPersonTwo = {
  name: 'foo',
  lastName: 'bar',
}
