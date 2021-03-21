import { Box, Button } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { auth, googleAuthProvider } from '../../Firebase/Firebase.config'
import { setUserAction } from '../Action/action'
import { store } from '../Store/Store'

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
  Link,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: '62vh',
    width: 320,
    margin: '20px auto',
  }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { state, dispatch } = useContext(store)
  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: '/' } }

  const handleGoogleSignIn = async () => {
    const res = await auth.signInWithPopup(googleAuthProvider)
    dispatch(setUserAction(res.user))
    history.replace(from)
  }

  return (
    <div>
      <Box m={12} />
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h6'> Login </Typography>
          </Grid>
          <form
            onSubmit={async (event) => {
              try {
                event.preventDefault()
                const res = await auth.signInWithEmailAndPassword(
                  email,
                  password
                )
                console.log(res)
                dispatch(setUserAction(res.user))
                history.replace(from)
              } catch (error) {
                setError(error.message)
              }
            }}
          >
            <TextField
              onBlur={(event) => {
                setEmail(event.target.value)
              }}
              label='Email'
              placeholder='Enter Email'
              fullWidth
              required
            />
            <TextField
              onBlur={(event) => {
                setPassword(event.target.value)
              }}
              label='Password'
              placeholder='Enter password'
              type='password'
              fullWidth
              required
            />

            <Button
              type='submit'
              color='primary'
              variant='contained'
              style={btnstyle}
              fullWidth
            >
              Login
            </Button>
          </form>

          <Typography>
            {' '}
            Don't have an account ?
            <Button
              variant='contained'
              color='secondary'
              onClick={() => history.push('/register')}
            >
              Create an account
            </Button>
          </Typography>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Typography
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginTop: '10px',
              color: 'purple',
            }}
          >
            Or
          </Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={handleGoogleSignIn}
          >
            Login with Google
          </Button>
        </Paper>
      </Grid>
    </div>
  )
}

export default Login
