import { useAppSelector } from '../hooks'
import { getOtherPlayers } from '../store/players/selectors'
import { Player } from '../Player'

export const Players = () => {
  const players = useAppSelector(getOtherPlayers)

  return (
    <div>
      { players.map((player) => (
        <Player name={player.name} />
      ))}
    </div>
  )
}
