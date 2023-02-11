import { useEffect, useState } from 'react'
import './App.css'
import { EmptyRow } from './EmptyRow'
import { GameState } from './GameState'
import { GuessedRow } from './GuessedRow'
import { InProgressRow } from './InProgressRow'
import { getRandomWord, range } from './utils'
import { WORD_LIST } from './WordList'

const MAX_GUESS_COUNT = 6

function App() {
  const [guessedWords, setGuessedWords] = useState<Array<string>>([])
  const [inProgressWord, setInProgressWord] = useState('')
  const [targetWord, setTargetWord] = useState('')
  const [gameState, setGameState] = useState(GameState.IN_PROGRESS)

  const restart = () => {
    setTargetWord(getRandomWord(WORD_LIST))
    setGuessedWords([])
    setGameState(GameState.IN_PROGRESS)
  }

  useEffect(() => {
    setTargetWord(getRandomWord(WORD_LIST))
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

        if (inProgressWord === targetWord) {
          setGameState(GameState.WIN)
        }

        if (inProgressWord != targetWord && guessedWords.length === MAX_GUESS_COUNT - 1) {
          setGameState(GameState.LOSE)
        }
      }
    }

    addEventListener('keyup', keyListener)

    return () => removeEventListener('keyup', keyListener)
  }, [guessedWords, inProgressWord])

  return (
    <div>
      {guessedWords.map((guessedWord, i) => (
        <GuessedRow key={i} word={guessedWord} targetWord={targetWord} />
      ))}
      {gameState === GameState.IN_PROGRESS && <InProgressRow word={inProgressWord} />}
      {range(MAX_GUESS_COUNT - guessedWords.length - (gameState === GameState.IN_PROGRESS ? 1 : 0)).map((i) => (
        <EmptyRow key={i} />
      ))}
      <div className="mt-4 h-24">
        {gameState === GameState.WIN && <div className="mb-2 text-lg font-bold">Victory!</div>}
        {gameState === GameState.LOSE && <div className="mb-2 text-lg font-bold">{`Defeat! The word is ${targetWord}`}</div>}
        {gameState !== GameState.IN_PROGRESS && (
          <button
            onClick={restart}
            type="button"
            className="mr-2 mb-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Play again
          </button>
        )}
      </div>
    </div>
  )
}

export default App
