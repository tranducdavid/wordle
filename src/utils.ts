export const getLetter = (word: string, index: number) => word[index] ?? ''

export const isLetterInWord = (word: string, char: string) => word.includes(char)

export const isLetterAtPosition = (word: string, char: string, index: number) => word[index] === char

export const range = (n: number) => (n < 0 ? [] : [...Array(n).keys()])

export const getRandomWord = (words: Array<string>) => words[Math.floor(Math.random() * words.length)]
