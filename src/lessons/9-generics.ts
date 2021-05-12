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

function identityWithDefaultValues<Type = unknown>(arg: Type): Type {
  return arg
}

identityWithDefaultValues('foo') // string

function loggingIdentity<Type>(arg: Type): Type {
  // @ts-expect-error
  console.log(arg.length)
  return arg
}

function loggingIdentity2<Type>(arg: Type[]): Type[] {
  console.log(arg.length)
  return arg
}

class Generic<Type> {
  foo?: Type
  bar(x: Type): Type {
    return x
  }
}

const generic = new Generic<string>()
generic.foo = ''
generic.bar('baz')

class DefaultClassGeneric<Type = string> {
  foo?: Type
  bar(x: Type): Type {
    return x
  }
}
const generic2 = new DefaultClassGeneric()
generic2.foo = ''
generic2.bar('baz')

interface Lengthwise {
  length: number
}

function loggingConstraintIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length)
  return arg
}

loggingConstraintIdentity([])
loggingConstraintIdentity({ length: 2 })

interface Foo<T> {
  bar(): T
}

export {}
