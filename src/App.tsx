import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState('')

  useEffect(() => {
    const keyListener = (event: KeyboardEvent) => {
      if (event.keyCode >= 65 && event.keyCode <= 90 && word.length < 5) {
        setWord((word) => word + event.key.toUpperCase())
      }
      if (event.key === 'Backspace') {
        setWord((word) => word.slice(0, -1))
      }
    }

    addEventListener('keyup', keyListener)

    return () => removeEventListener('keyup', keyListener)
  }, [word])

  return <div>{word}</div>
}

export default App
