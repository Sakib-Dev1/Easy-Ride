import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import { MenuItem } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

import { DirectionsBike } from '@material-ui/icons'
import { useContext } from 'react'
import { store } from '../Store/Store'
import { auth } from '../../Firebase/Firebase.config'
import { setUserAction, setVehicleAction } from '../Action/action'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = (props) => {
  const history = useHistory()
  const classes = useStyles()
  const {
    state: { user },
    dispatch,
  } = useContext(store)

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <IconButton
          style={{
            display: 'flex',
            marginRight: 'auto',
          }}
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <DirectionsBike />
        </IconButton>

        <Typography variant='h6' className={classes.title}>
          <Button
            onClick={() => history.push('/')}
            style={{ color: 'white' }}
            variant='text'
            style={{
              color: 'white',
              fontSize: '40px',
              fontWeight: 'bold',
            }}
          >
            Easy Ride
          </Button>
        </Typography>

        <div className={classes.buttonBar}>
          <Button
            onClick={() => {
              //  dispatch(setVehicleAction('bike'))
              history.push('/search')
            }}
            style={{ color: 'white' }}
            variant='text'
          >
            Destination
          </Button>
          {user && user.displayName ? (
            <>
              <Button style={{ color: 'white' }}>{user.displayName}</Button>
              <Button
                onClick={() => {
                  auth.signOut()
                  dispatch(setUserAction({}))
                }}
                style={{ color: 'white' }}
                variant='text'
              >
                LogOut
              </Button>
            </>
          ) : (
            <Button
              onClick={() => history.push('/login')}
              style={{ color: 'white' }}
              variant='text'
            >
              LogIn
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
