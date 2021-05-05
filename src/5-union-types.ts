function printId(id: number | string) {
  console.log(id)
}

printId(101)
printId('202')
// @ts-expect-error
printId({ myID: 22342 })

function printId2(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

export {}
