import { Middleware } from 'redux'

import type { Hand, Card } from './game/types'
import { AppState } from './'

const testHand: Hand = [
  { color: 'red', value: 10 },
  { color: 'blue', value: 2 },
  { color: 'yellow', value: 8 },
  { color: 'green', value: 1 },
  { color: 'red', value: 9 },
  { color: 'blue', value: 11 },
  { color: 'yellow', value: 2 },
  { color: 'blue', value: 4 },
  { color: 'any', value: 'skip' },
  { color: 'any', value: 'wild' },
]

const testPlayers = [
  { name: 'codi', phase: 0 },
  { name: 'sam', phase: 1 },
  { name: 'sally', phase: 0 },
  { name: 'em', phase: 1 },
  { name: 'rosalie', phase: 1 },
  { name: 'josh', phase: 0 },
]


const testTopCard: Card = { color: 'red', value: 5 }

export const testServer: Middleware<{}, AppState> = storeApi => next => action => {
  switch(action.type) {
    case 'INITIALIZE_GAME_RESPONSE':
      action.response = {
        userPlayer: action.action.name,
        hand: testHand,
        topCard: testTopCard,
        currentTurn: action.action.name,
        players: [ ...testPlayers, { name: action.action.name, phase: 0 } ]
      }
  }

  return next(action)
}
