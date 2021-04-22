import { useDispatch } from 'react-redux'

import { useAppSelector } from '../hooks'
import { toggleDiscardMode } from '../store/game/actions'
import { getIsUserDiscarding } from '../store/game/selectors'

export const ToggleDiscardMode = () => {
  const dispatch = useDispatch()
  const isUserDiscarding = useAppSelector(getIsUserDiscarding)
  const buttonText = isUserDiscarding ? 'Just Kidding!' : 'Discard'

  return (
    <button onClick={() => dispatch(toggleDiscardMode())}>
      { buttonText }
    </button>
  )
}


