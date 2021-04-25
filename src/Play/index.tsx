import classnames from 'classnames'

import { Card } from '../Card'
import { useAppSelector } from '../hooks'
import { getPlay } from '../store/players/selectors'

import './play.scss'

interface Props {
  className: string
  player: string
}

export const Play = ({ className, player }: Props) => {
  const play = useAppSelector(getPlay(player))

  return (
    <div class={classnames('play', className)}>
      { play.map((c) => <Card size='small' color={c.color} value={c.value} />) }
    </div>
  )
}
