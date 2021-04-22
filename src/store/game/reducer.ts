import update from 'immutability-helper'
import { Action as ReduxAction } from 'redux'
import type { Card, Color, Hand, Value } from './types'

interface AddToPhase extends ReduxAction<'ADD_TO_PHASE'> {
  color: Color
  value: Value
}

interface DiscardResponse extends ReduxAction<'DISCARD_RESPONSE'> {
  action: {
    color: Color
    value: Value
  }
}

interface InitializeGameResponse extends ReduxAction<'INITIALIZE_GAME_RESPONSE'> {
  response: {
    userPlayer: string
    hand: Hand
    topCard: Card
    currentTurn: string
  }
}

interface ToggleDiscardMode extends ReduxAction<'TOGGLE_DISCARD_MODE'> {}
interface TogglePhaseMode extends ReduxAction<'TOGGLE_PHASE_MODE'> {}

type Action =
  | AddToPhase
  | DiscardResponse
  | InitializeGameResponse
  | ToggleDiscardMode
  | TogglePhaseMode

export type Game = {
  currentTurn?: string
  hand: Hand
  isUserDiscarding: boolean
  isUserMakingPhase: boolean
  phase: Card[]
  topCard?: Card
  userPlayer: string
}

const initialState: Game = {
  hand: [],
  isUserDiscarding: false,
  isUserMakingPhase: false,
  phase: [],
  userPlayer: '',
}

export const gameReducer = (state=initialState, a: Action): Game => {
  switch (a.type) {
    case 'ADD_TO_PHASE':
      return update(state, { $merge: {
        phase: update(state.phase, { $push: [
          { color: a.color, value: a.value },
        ]})
      }})
    case 'INITIALIZE_GAME_RESPONSE':
      return update(state, { $merge: {
        userPlayer: a.response.userPlayer,
        hand: a.response.hand,
        topCard: a.response.topCard,
        currentTurn: a.response.currentTurn,
      }})

    case 'TOGGLE_DISCARD_MODE':
      return update(state, { $merge: {
        isUserDiscarding: !state.isUserDiscarding
      }})

    case 'TOGGLE_PHASE_MODE':
      return update(state, { $merge: {
        isUserMakingPhase: !state.isUserMakingPhase
      }})

    case 'DISCARD_RESPONSE':
      const index = state.hand.findIndex((c) => c.color === a.action.color && c.value === a.action.value)

      if (index === -1) { return state }

      return update(state, { $merge: {
        isUserDiscarding: false,
        hand: update(state.hand, { $splice: [[index, 1]] })
      }})
    default:
      return state
  }
}
