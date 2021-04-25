import classnames from 'classnames'
import { ComponentChildren } from 'preact'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks'
import { skipPlay } from '../store/game/actions'
import {
  getIsUserTurn,
  getIsUserDiscarding,
  getIsUserDrawing,
  getIsUserPlaying
} from '../store/game/selectors'
import type { TurnStage } from '../store/game/types'

import './stages.scss'

interface StageProps {
  active: boolean
  children?: ComponentChildren
  isUserTurn: boolean
  name: string
}

const Stage = ({ active, children, isUserTurn, name }: StageProps) => (
  <div class={classnames('stage', name, { 'user-turn': isUserTurn, active })}>
    <span>{name}</span>
    { children && <span>{children}</span>}

  </div>
)

interface Props {
  className: string
}

export const Stages = ({ className }: Props) => {
  const dispatch = useDispatch()
  const isUserTurn = useAppSelector(getIsUserTurn)
  const isUserDrawing = useAppSelector(getIsUserDrawing)
  const isUserPlaying = useAppSelector(getIsUserPlaying)
  const isUserDiscarding = useAppSelector(getIsUserDiscarding)

  return (
    <div class={classnames(className, 'stages', { user: isUserTurn })}>
      <Stage name='draw' isUserTurn={isUserTurn} active={isUserDrawing} />
      <Stage name='play' isUserTurn={isUserTurn} active={isUserPlaying}>
        { isUserPlaying &&
          <button onClick={() => dispatch(skipPlay())}>Skip</button>
        }
      </Stage>
      <Stage name='discard' isUserTurn={isUserTurn} active={isUserDiscarding} />
    </div>
  )
}
