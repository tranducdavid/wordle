import { useEffect, useState } from 'react'
import './App.css'

const words = ['HELLO', 'WORLD', 'APPLE', 'TASTY']

function App() {
  const [word, setWord] = useState('')
  const [targetWord, setTargetWord] = useState('')

  useEffect(() => {
    setTargetWord(words[Math.floor(Math.random() * words.length)])
  }, [])

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

  return (
    <div>
      {word === targetWord && <div>You win</div>}
      <div>{word}</div>
      <div>targetWord: {targetWord}</div>
    </div>
  )
}

export default App
