import { FC, useState } from 'react'
import logo from './logo.svg'

interface Person {
  name: string
}

export const Header: FC<{ title: string }> = ({ title }) => {
  const [count, setCount] = useState(0)
  const [people, setPeople] = useState<Person[]>([])
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {title.toUpperCase()}
      </a>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setPeople([{ name: 'César' }, { name: 'Miguel' }])}>
        {JSON.stringify(people, null, 2)}
      </button>
    </header>
  )
}
