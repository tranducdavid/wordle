import { range } from './utils'

const LetterBox = () => <div className="m-1 h-16 w-16 max-w-sm rounded-lg border border-gray-200 bg-white p-4 text-center text-xl font-bold text-black shadow" />

export const EmptyRow = () => (
  <div className="flex flex-row">
    {range(5).map((i) => (
      <LetterBox key={i} />
    ))}
  </div>
)
