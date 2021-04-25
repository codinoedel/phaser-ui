import { useAppSelector } from '../hooks'
import { getCurrentTurn, getIsUserTurn } from '../store/game/selectors'

interface Props {
  className: string
}

export const Turn = ({ className }: Props) => {
  const isUserTurn = useAppSelector(getIsUserTurn)
  const currentTurn = useAppSelector(getCurrentTurn)
  const turnText = isUserTurn ? 'your' : `${currentTurn}'s`

  return (
    <div class={className}>It's { turnText } turn</div>
  )
}
