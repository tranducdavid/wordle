import { getLetter, range } from './utils'

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
    {range(5).map((i) => (
      <LetterBox key={i} word={word} index={i} />
    ))}
  </div>
)
