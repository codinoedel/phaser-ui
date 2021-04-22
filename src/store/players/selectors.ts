import { useAppSelector } from '../../hooks'
import type { AppState } from '../'
import { getUserPlayerName } from '../game/selectors'
import type { Player } from './types'

export const getOtherPlayers = (state: AppState): Player[] => {
  const userPlayerName = useAppSelector(getUserPlayerName)
  return Object.values(state.players)
    .filter((p) => p.name !== userPlayerName)
}
