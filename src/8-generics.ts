function identity1(arg: number): number {
  return arg
}

function identity2(arg: string): string {
  return arg
}

function identity3(arg: boolean): boolean {
  return arg
}

function identity<Type>(arg: Type): Type {
  return arg
}

identity<string>('foo') // string
identity('foo') // string

// @ts-expect-error
function identityWithMoreGenerics<Type, Result>(arg: Type): Type {
  return arg
}

identityWithMoreGenerics<string, number>('foo') // string
identityWithMoreGenerics('foo') // string

function loggingIdentity<T>(arg: T): T {
  // @ts-expect-error
  console.log(arg.length)
  return arg
}

function loggingIdentity2<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

class Generic<T> {
  foo?: T
  bar(x: T): T {
    return x
  }
}
const generic = new Generic<string>()
generic.foo = ''
generic.bar('baz')

class DefaultGeneric<T = string> {
  foo?: T
  bar(x: T): T {
    return x
  }
}
const generic2 = new DefaultGeneric()
generic2.foo = ''
generic2.bar('baz')

interface Lengthwise {
  length: number
}

function loggingConstraintIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingConstraintIdentity([])
loggingConstraintIdentity({ length: 2 })

interface Foo<T> {
  bar(): T
}

export {}
