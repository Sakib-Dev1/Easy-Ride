import { Box } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useHistory } from 'react-router'
import { auth } from '../../Firebase/Firebase.config'
import { store } from '../Store/Store'
import { setUserAction } from '../Action/action'

const Register = () => {
  const paperStyle = {
    padding: 20,

    width: 280,
    margin: '20px auto',
  }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  console.log(name, email, password, confirmPassword)
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  const validateName = (name) => {
    const re = /^([^0-9]*)$/
    return re.test(String(name))
  }
  const { state, dispatch } = useContext(store)

  return (
    <div>
      <Box m={12} />
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h6'>Register</Typography>
          </Grid>
          <form
            onSubmit={async (event) => {
              try {
                event.preventDefault()
                console.log(name, email, password, confirmPassword)
                await auth.createUserWithEmailAndPassword(email, password)
                const user = auth.currentUser

                await user.updateProfile({ displayName: name })
                dispatch(setUserAction(user))
                history.push('/')
                console.log(user)
              } catch (error) {
                setError(error.message)
              }
            }}
          >
            <TextField
              onBlur={(event) => {
                const res = validateName(event.target.value)
                if (res) {
                  setName(event.target.value)
                  setError('')
                } else {
                  setError('Name is not Valid')
                }
              }}
              label='name'
              placeholder='Enter username'
              fullWidth
              required
            />
            <TextField
              onBlur={(event) => {
                const res = validateEmail(event.target.value)
                // console.log({ email: res })
                if (res) {
                  setEmail(event.target.value)
                  setError('')
                } else {
                  setError('Email is not valid')
                }
              }}
              label='email'
              placeholder='Enter email'
              fullWidth
              required
            />
            <TextField
              onBlur={(event) => {
                if (event.target.value.length > 5) {
                  setPassword(event.target.value)
                  setError('')
                  console.log(event.target.value)
                } else {
                  setError('Password Length should be more than 5 ')
                  console.log('error')
                }
              }}
              label='Password'
              type='password'
              placeholder='Enter Password'
              fullWidth
              required
            />

            <TextField
              onBlur={(event) => {
                if (password === event.target.value) {
                  setConfirmPassword(event.target.value)
                  setError('')
                } else {
                  setError("Password doesn't match")
                  console.log('error password')
                }
              }}
              label='Confirm Password'
              placeholder='Confirm Password'
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
              Register
            </Button>
          </form>

          <Typography>
            {' '}
            Do you have an account ?
            <Button onClick={() => history.push('/login')}>Sign In</Button>
          </Typography>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Paper>
      </Grid>
    </div>
  )
}

export default Register
