import { useEffect, useState } from 'react'
import './App.css'
import { GuessedRow } from './GuessedRow'
import { getLetter } from './utils'

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
      <GuessedRow targetWord={targetWord} word={word} />
      {/* <div className="flex flex-row">
        <div className="m-1 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">{getLetter(word, 0)}</div>
        <div className="m-1 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">{getLetter(word, 1)}</div>
        <div className="m-1 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">{getLetter(word, 2)}</div>
        <div className="m-1 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">{getLetter(word, 3)}</div>
        <div className="m-1 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">{getLetter(word, 4)}</div>
      </div> */}
      <div>targetWord: {targetWord}</div>
    </div>
  )
}

export default App
