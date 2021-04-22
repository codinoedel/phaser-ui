import { useAppSelector } from '../hooks'
import { getHand } from '../store/game/selectors'
import { ActionWrapper } from './ActionWrapper'
import { Card } from '../Card'

export const Hand = () => {
  const hand = useAppSelector(getHand)

  return (
    <div>
      { hand.map((card) => (
        <ActionWrapper color={card.color} value={card.value}>
          <Card color={card.color } value={card.value} size='large' />
        </ActionWrapper>
      ))}
    </div>
  )
}
