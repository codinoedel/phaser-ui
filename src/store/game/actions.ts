import { useAppDispatch } from '../../hooks'
import type { Card, Color, Value } from './types'

export const addToPhase = (color: Color, value: Value) => ({
  type: 'ADD_TO_PHASE',
  color,
  value,
})

export const discard = (color: Color, value: Value) => ({
  type: 'DISCARD',
  message: 'Discard',
  color,
  value,
})

export const submitPhase = (cards: Card[]) => ({
  type: 'SUBMIT_PHASE',
  message: 'SubmitPhase',
  cards
})

export const initializeGame = (name: string) => ({
  type: 'INITIALIZE_GAME',
  message: 'InitializeGame',
  name,
})

export const toggleDiscardMode = () => ({
  type: 'TOGGLE_DISCARD_MODE'
})

export const togglePhaseMode = () => ({
  type: 'TOGGLE_PHASE_MODE'
})
