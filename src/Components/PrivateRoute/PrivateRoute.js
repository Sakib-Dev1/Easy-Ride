import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { store } from '../Store/Store'

function PrivateRoute({ children, ...rest }) {
  const {
    state: { user },
    dispatch,
  } = useContext(store)
  console.log(user)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user && user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
export default PrivateRoute
