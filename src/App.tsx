import { useEffect, useState } from 'react'
import './App.css'
import { EmptyRow } from './EmptyRow'
import { GuessedRow } from './GuessedRow'
import { InProgressRow } from './InProgressRow'
import { range } from './utils'

const WORDS = ['HELLO', 'WORLD', 'APPLE', 'TASTY']
const MAX_GUESS_COUNT = 6

function App() {
  const [guessedWords, setGuessedWords] = useState<Array<string>>([])
  const [inProgressWord, setInProgressWord] = useState('')
  const [targetWord, setTargetWord] = useState('')

  useEffect(() => {
    setTargetWord(WORDS[Math.floor(Math.random() * WORDS.length)])
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
      {guessedWords[guessedWords.length - 1] === targetWord && <div>You win</div>}
      {guessedWords.map((guessedWord, i) => (
        <GuessedRow key={i} word={guessedWord} targetWord={targetWord} />
      ))}
      <InProgressRow word={inProgressWord} />
      {range(MAX_GUESS_COUNT - guessedWords.length - 1).map((i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}

export default App
