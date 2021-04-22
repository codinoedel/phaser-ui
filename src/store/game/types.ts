export type Color = 'red' | 'yellow' | 'green' | 'blue' | 'any'
export type Value = string | number

export type Card = { color: Color, value: Value }
export type Hand = Card[]
