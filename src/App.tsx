import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState('')

  useEffect(() => {
    const keyListener = (event: KeyboardEvent) => {
      if (event.keyCode >= 65 && event.keyCode <= 90) setWord((word) => word + event.key)
    }

    addEventListener('keyup', keyListener)

    return () => removeEventListener('keyup', keyListener)
  }, [])

  return <div>{word}</div>
}

export default App
