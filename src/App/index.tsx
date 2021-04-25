import { useDispatch } from 'react-redux'

import { Initializer }  from '../Initializer'
import { Game } from '../Game'
import { connect } from '../store/connection/actions'

import './app.scss'

export const App = () => {
  const dispatch = useDispatch()

  dispatch(connect())

  return (
    <div class='app'>
      <Initializer />
      <Game />
    </div>
  )
}
