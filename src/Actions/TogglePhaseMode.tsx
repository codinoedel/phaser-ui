import { useDispatch } from 'react-redux'

import { useAppSelector } from '../hooks'
import { togglePhaseMode } from '../store/game/actions'
import { getIsUserMakingPhase } from '../store/game/selectors'

export const TogglePhaseMode = () => {
  const dispatch = useDispatch()
  const isUserMakingPhase = useAppSelector(getIsUserMakingPhase)
  const buttonText = isUserMakingPhase ? 'Not Ready' : 'Make Phase'

  return (
    <button onClick={() => dispatch(togglePhaseMode())}>
      { buttonText }
    </button>
  )
}
