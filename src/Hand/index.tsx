import { useAppSelector } from '../hooks'
import { getHand } from '../store/game/selectors'
import { ActionWrapper } from './ActionWrapper'
import { Card } from '../Card'

import './hand.scss'

export const Hand = () => {
  const hand = useAppSelector(getHand)

  return (
    <div class='hand'>
      { hand.map((card) => (
        <ActionWrapper color={card.color} value={card.value}>
          <Card color={card.color } value={card.value} size='large' />
        </ActionWrapper>
      ))}
    </div>
  )
}
