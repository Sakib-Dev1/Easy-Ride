import { createContext, useReducer } from 'react'
import reducer from './Reducer'

const init = {
  results: [],
  categories: [],
  user: {},
  vehicle: 'bike',
  results: [],
}

const store = createContext(init)

const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
