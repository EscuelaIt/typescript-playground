type UpDown = 'top' | 'down'
type LeftRight = 'left' | 'right'

type Direction = `${Capitalize<UpDown>}-${LeftRight}`

const direction: Direction = 'Top-left'

export {}
