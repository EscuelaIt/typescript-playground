class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number) {
    console.log('Moved ' + distance + ' meters')
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance = 5) {
    console.log(this.name + ' moves...')
    super.move(distance)
  }
}

const dog = new Dog('Tobby')
dog.move()

class ClassWithPrivateMethodsAndProperties {
  publicProperty = 42
  private privateProperty = 42

  publicMethod() {
    return this.privateMethod()
  }

  private privateMethod() {
    return this.privateProperty
  }
}

class ImprovedConstructorAssignment {
  constructor(public name: string) {}

  move(distance: number) {
    console.log('Moved ' + distance + ' meters')
  }
}

class ReadonlyClass {
  constructor(
    public readonly name: string,
    private readonly foo: number,
    private readonly person: {
      name: string
      age: number
      job?: string
      pet: string | undefined
    }
  ) {}

  bar(): string {
    this.person.age = 43
    return this.name + this.foo
  }
}

abstract class AbstractClass {
  abstract someMethod(): void

  otherMethod() {
    return 42
  }
}

class BaseClass extends AbstractClass {
  someMethod() {
    return this.otherMethod() + 1
  }
}

export {}
