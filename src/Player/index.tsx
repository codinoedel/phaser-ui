import { Play } from '../Play'
import { useAppSelector } from '../hooks'
import { getHandSize } from '../store/players/selectors'

import './player.scss'

interface Props {
  name: string
}

export const Player = ({ name }: Props) => {
  const handSize = useAppSelector(getHandSize(name))

  return (
    <div class='player'>
      <h4 class='name'>{ name }</h4>
      <i>Cards: {handSize}</i>
      <Play player={name} className='player-play' />
    </div>
  )
}
