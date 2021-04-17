import { render } from 'preact'
import { Provider } from 'react-redux'

import { configureStore } from './store'

render(
  <Provider store={configureStore()}>
    <h1>wat</h1>
  </Provider>,
  document.body
)
