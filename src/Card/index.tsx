import classnames from 'classnames'
import type { Color, Value } from '../store/game/types'

import './card.scss'

type CardSize = 'small' | 'large'

interface Props {
  color: Color
  size: CardSize
  value: Value
}

export const Card = ({ color, size, value }: Props) => (
  <div class={classnames('card', color, size)}>
    { value === 'skip' ? 'S' : value === 'wild' ? 'W' : value }
  </div>
)

interface CardBackProps {
  size: CardSize
}

export const CardBack = ({ size }: CardBackProps) => (
  <div class={classnames('card', 'back', size)} />
)
