import { useEffect, useState } from 'react'
import './App.css'
import { GuessedRow } from './GuessedRow'
import { InProgressRow } from './InProgressRow'

const words = ['HELLO', 'WORLD', 'APPLE', 'TASTY']

function App() {
  const [guessedWords, setGuessedWords] = useState<Array<string>>([])
  const [inProgressWord, setInProgressWord] = useState('')
  const [targetWord, setTargetWord] = useState('')

  useEffect(() => {
    setTargetWord(words[Math.floor(Math.random() * words.length)])
  }, [])

  useEffect(() => {
    const keyListener = (event: KeyboardEvent) => {
      if (event.keyCode >= 65 && event.keyCode <= 90 && inProgressWord.length < 5) {
        setInProgressWord((word) => word + event.key.toUpperCase())
      }
      if (event.key === 'Backspace') {
        setInProgressWord((word) => word.slice(0, -1))
      }
      if (inProgressWord.length === 5 && event.key === 'Enter') {
        setGuessedWords((guessedWords) => [...guessedWords, inProgressWord])
        setInProgressWord('')
      }
    }

    addEventListener('keyup', keyListener)

    return () => removeEventListener('keyup', keyListener)
  }, [guessedWords, inProgressWord])

  return (
    <div>
      {inProgressWord === targetWord && <div>You win</div>}
      {guessedWords.map((guessedWord, i) => (
        <GuessedRow key={i} word={guessedWord} targetWord={targetWord} />
      ))}
      <InProgressRow word={inProgressWord} />
    </div>
  )
}

export default App
