export const getLetter = (word: string, index: number) => word[index] ?? ''

export const isLetterInWord = (word: string, char: string) => word.includes(char)

export const isLetterAtPosition = (word: string, char: string, index: number) => word[index] === char
