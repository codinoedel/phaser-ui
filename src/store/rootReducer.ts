import { combineReducers } from 'redux'

import playersReducer from './players/reducer'

export const rootReducer = combineReducers({
  players: playersReducer,
})

export type RootState = ReturnType<typeof rootReducer>
