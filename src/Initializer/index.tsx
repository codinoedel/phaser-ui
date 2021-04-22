import { useState } from 'preact/compat'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../hooks'
import { initializeGame } from '../store/game/actions'
import { getIsGameInitialized } from '../store/game/selectors'

export const Initializer = () => {
  const isGameInitialized = useAppSelector(getIsGameInitialized)
  const dispatch = useDispatch()

  if (isGameInitialized) { return null }

  const [ name, setName ] = useState('')
  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setName(target.value)
  }

  const onSubmit = (e: Event) => {
    e.preventDefault()
    dispatch(initializeGame(name))
    setName('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div>What is your name?</div>
      <input type='text' value={name} onInput={onInput} />
      <button type='submit'>That's me!</button>
    </form>
  )
}
