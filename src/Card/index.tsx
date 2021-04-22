import classnames from 'classnames'
import type { Color, Value } from '../store/game/types'

interface Props {
  color: Color
  size: 'small' | 'large'
  value: Value
}

export const Card = ({ color, size='small', value }: Props) => (
  <div class={classnames('card', color, size)}>
    { value }
  </div>
)
