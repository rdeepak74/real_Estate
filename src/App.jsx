import { useState } from 'react'
import './App.css'
import RealState from './components/RealState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RealState />
    </>
  )
}

export default App
