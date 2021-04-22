import { useAppSelector } from '../hooks'
import { getIsUserTurn } from '../store/game/selectors'
import { ToggleDiscardMode } from './ToggleDiscardMode'
import { TogglePhaseMode } from './TogglePhaseMode'

export const Actions = () => {
  const isUserTurn = useAppSelector(getIsUserTurn)

  if (!isUserTurn) { return null }

  return (
    <div>
      <ToggleDiscardMode />
      <TogglePhaseMode />
    </div>
  )
}
