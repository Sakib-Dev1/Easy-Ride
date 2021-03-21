import logo from './logo.svg'
import './App.css'
import Home from './Components/Home/Home'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Search from './Components/Search/Search'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Register from './Components/Register/Register'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <PrivateRoute exact path='/search'>
            <Search />
          </PrivateRoute>
          <Route exact path='/register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
