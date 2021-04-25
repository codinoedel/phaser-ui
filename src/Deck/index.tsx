import classnames from 'classnames'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks'
import { drawFromDeck, drawFromDiscard } from '../store/game/actions'
import { getIsUserDrawing, getTopCard } from '../store/game/selectors'

import { Card, CardBack } from '../Card'

import './deck.scss'

interface Props {
  className: string
}

export const Deck = ({ className }: Props) => {
  const top = useAppSelector(getTopCard)
  const drawing = useAppSelector(getIsUserDrawing)
  const dispatch = useDispatch()

  return (
    <div class={classnames('deck', className)}>
      <div>
        <label>deck</label>
        <CardBack size='large' />
        { drawing &&
          <button onClick={() => dispatch(drawFromDeck())}>Draw</button>
        }
      </div>
      <div>
        <label>discard</label>
        { top && <Card color={top.color} size='large' value={top.value} /> }
        { top && drawing &&
          <button onClick={() => dispatch(drawFromDiscard())}>Draw</button> }
      </div>
    </div>
  )
}
