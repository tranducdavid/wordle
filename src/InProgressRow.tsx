import { getLetter } from './utils'

type LetterBoxProps = {
  word: string
  index: number
}

const LetterBox = ({ word, index }: LetterBoxProps) => (
  <div className="m-1 h-16 w-16 max-w-sm rounded-lg border border-gray-200 bg-white p-4 text-center text-xl font-bold text-black shadow dark:border-gray-700 dark:bg-gray-800">
    {getLetter(word, index)}
  </div>
)

type InProgressRowProps = {
  word: string
}

export const InProgressRow = ({ word }: InProgressRowProps) => (
  <div className="flex flex-row">
    <LetterBox word={word} index={0} />
    <LetterBox word={word} index={1} />
    <LetterBox word={word} index={2} />
    <LetterBox word={word} index={3} />
    <LetterBox word={word} index={4} />
  </div>
)
