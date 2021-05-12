interface Fish {
  swim(): void
}

interface Bird {
  fly(): void
}

function getSmallPet(): Fish | Bird {
  return Math.random() > 0.5 ? { fly() {} } : { swim() {} }
}

const pet = getSmallPet()

if ('swim' in pet) {
  pet.swim()
}

// @ts-expect-error
if (pet.fly) {
  // @ts-expect-error
  pet.fly()
}

// Type guards
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

const pet2 = getSmallPet()

if (isFish(pet2)) {
  pet2.swim()
} else {
  pet2.fly()
}

// InstanceOf
class Car {
  wheels = 4
  drive() {
    return 'driving'
  }
}
class Plane {
  wheels = 6
  fly() {
    return 'flying'
  }
}

function getVehicle(): Car | Plane {
  return Math.random() > 0.5 ? new Car() : new Plane()
}

const vehicle = getVehicle()

if (vehicle instanceof Car) {
  vehicle.drive()
} else {
  vehicle.fly()
}

// Typeof type guards
function isNumber(x: unknown): x is number {
  return typeof x === 'number'
}

function isString(x: unknown): x is string {
  return typeof x === 'string'
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value
  }
  if (isString(padding)) {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

export {}
