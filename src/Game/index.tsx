import { useAppSelector } from '../hooks'
import { getIsGameInitialized } from '../store/game/selectors'
import { Deck } from '../Deck'
import { Hand } from '../Hand'
import { Players } from '../Players'
import { Stages } from '../Stages'
import { Turn } from '../Turn'

import './game.scss'

export const Game = () => {
  const isGameInitialized = useAppSelector(getIsGameInitialized)

  if (!isGameInitialized) { return null }

  return (
    <div className='game'>
      <Turn className='game-turn' />
      <Stages className= 'game-stages' />
      <Players className='game-players' />
      <Deck className='game-deck' />
      <Hand />
    </div>
  )
}
