import classnames from 'classnames'
import { ComponentChildren } from 'preact'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../hooks'
import { discard, addToPlay } from '../store/game/actions'
import { getIsUserDiscarding, getIsUserPlaying } from '../store/game/selectors'
import type { Color, Value } from '../store/game/types'

interface Props {
  children: ComponentChildren
  color: Color
  value: Value
}

export const ActionWrapper = ({ children, color, value }: Props) => {
  const isUserDiscarding = useAppSelector(getIsUserDiscarding)
  const isUserPlaying = useAppSelector(getIsUserPlaying)

  const dispatch = useDispatch()

  return (
    <div class={classnames('discard-wrapper', { 'discarding': isUserDiscarding })}>
      { isUserDiscarding &&
        <button onClick={() => dispatch(discard(color, value))}>
          this one
        </button>
      }
      { isUserPlaying &&
        <button onClick={() => dispatch(addToPlay(color, value))}>
          play
        </button>
      }
      { children }
    </div>
  )
}
