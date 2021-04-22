import { useAppSelector } from '../hooks'
import { Actions } from '../Actions'
import { getCurrentTurn, getIsUserTurn } from '../store/game/selectors'

interface TurnLabelProps {
  isUserTurn: boolean
}

const TurnLabel = ({ isUserTurn }: TurnLabelProps) => {
  const currentTurn = useAppSelector(getCurrentTurn)
  const turnText = isUserTurn ? 'your' : `${currentTurn}'s`

  return (
    <div>It's { turnText } turn</div>
  )
}

export const Turn = () => {
  const isUserTurn = useAppSelector(getIsUserTurn)

  return (
    <div>
      <TurnLabel isUserTurn={isUserTurn} />
      { isUserTurn && <Actions /> }
    </div>
  )
}
