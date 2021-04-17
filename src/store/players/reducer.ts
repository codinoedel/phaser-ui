import update from 'immutability-helper'
import { Action as ReduxAction } from 'redux'

interface AddPlayer extends ReduxAction<'ADD_PLAYER'> {
  name: string
}

type Action =
  | AddPlayer

interface Player {
  name: string
}

type PlayerState = Record<string, Player>

const initialState: PlayerState = { }

export const playersReducer = (state=initialState, action: Action): PlayerState => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return update(state, { $merge: {
        [ action.name ]: { name: action.name }
      }})

    default:
      return state
  }
}

export default playersReducer
