import type { AppState } from '../'
import type { Hand } from './types'

export const getIsGameInitialized = (state: AppState): boolean => (
  state.game.userPlayer.length > 0
)

export const getUserPlayerName = (state: AppState): string => (
  state.game.userPlayer
)

export const getHand = (state: AppState): Hand => (
  state.game.hand || []
)

export const getCurrentTurn = (state: AppState): string => (
  state.game.currentTurn || 'nobody'
)

export const getIsUserDiscarding = (state: AppState): boolean => (
  state.game.isUserDiscarding
)

export const getIsUserMakingPhase = (state: AppState): boolean => (
  state.game.isUserMakingPhase
)

export const getIsUserTurn = (state: AppState): boolean => (
  state.game.userPlayer === state.game.currentTurn
)
