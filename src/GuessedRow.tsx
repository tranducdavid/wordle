import { getLetter, isLetterAtPosition, isLetterInWord } from './utils'

const getCardStyle = (targetWord: string, word: string, index: number) => {
  if (isLetterAtPosition(targetWord, word[index], index)) {
    return 'bg-lime-500'
  } else if (isLetterInWord(targetWord, word[index])) {
    return 'bg-yellow-500'
  }

  return 'bg-gray-500'
}

type LetterBoxProps = {
  targetWord: string
  word: string
  index: number
}

const LetterBox = ({ targetWord, word, index }: LetterBoxProps) => (
  <div
    className={`m-1 h-16 w-16 max-w-sm rounded-lg border border-gray-200 p-4 text-center text-xl font-bold text-white shadow dark:border-gray-700 dark:bg-gray-800 ${getCardStyle(
      targetWord,
      word,
      index
    )}`}
  >
    {getLetter(word, index)}
  </div>
)

type GuessedRowProps = {
  targetWord: string
  word: string
}

export const GuessedRow = ({ targetWord, word }: GuessedRowProps) => (
  <div className="flex flex-row">
    <LetterBox targetWord={targetWord} word={word} index={0} />
    <LetterBox targetWord={targetWord} word={word} index={1} />
    <LetterBox targetWord={targetWord} word={word} index={2} />
    <LetterBox targetWord={targetWord} word={word} index={3} />
    <LetterBox targetWord={targetWord} word={word} index={4} />
  </div>
)
