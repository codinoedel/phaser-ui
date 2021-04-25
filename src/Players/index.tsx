import classnames from 'classnames'
import { useAppSelector } from '../hooks'
import { getPlayers } from '../store/players/selectors'
import { Player } from '../Player'

import './players.scss'

interface Props {
  className: string
}

export const Players = ({ className }: Props) => {
  const players = useAppSelector(getPlayers)

  return (
    <div class={classnames('players', className)}>
      { players.map((player) => (
        <Player name={player.name} />
      ))}
    </div>
  )
}
