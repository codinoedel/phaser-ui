import { useAppSelector } from '../hooks'
import { getIsGameInitialized } from '../store/game/selectors'
import { Hand } from '../Hand'
import { Players } from '../Players'
import { Turn } from '../Turn'

export const Game = () => {
  const isGameInitialized = useAppSelector(getIsGameInitialized)

  if (!isGameInitialized) { return null }

  return (
    <div>
      <Turn />
      <Players />
      <Hand />
    </div>
  )
}
