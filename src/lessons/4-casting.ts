const someValue: unknown = 'this is a string'
// Avoid using this
const strLength: number = (someValue as string).length

const someOtherValue: unknown = null
// This throws an error in runtime
;(someOtherValue as string).length

export {}
