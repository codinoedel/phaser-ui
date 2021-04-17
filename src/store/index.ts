import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'

export const configureStore = () => {
//  const middlewares = []
//  const middlewareEnhancer = applyMiddleware(...middlewares)

//  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(/* ...enhancers */)

  const store = createStore(rootReducer, composedEnhancers)

  return store
}

export type PayloadAction<T> = { type: string; payload: T }
