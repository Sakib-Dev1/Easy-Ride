import React, { useContext, useEffect } from 'react'
import { getCategoriesAction, setVehicleAction } from '../Action/action'

import data from '../Data/Data.json'
import { store } from '../Store/Store'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router'
import image from '../../images/bg.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 200,
    padding: '36px',
    cursor: 'pointer',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
  },
  control: {
    padding: theme.spacing(2),
  },
  img: {
    width: '100%',
    height: '185px',
  },
  middle: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
  },
}))
const Home = () => {
  const [spacing, setSpacing] = React.useState(2)
  const classes = useStyles()
  const history = useHistory()
  const { state, dispatch } = useContext(store)
  console.log({
    state: state,
  })
  const { categories } = state
  useEffect(() => {
    dispatch(getCategoriesAction(data.categories))
  }, [])
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <Grid
        container
        className={`${classes.root} ${classes.middle}`}
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid container justify='center' spacing={spacing}>
            {categories.map((category) => (
              <Grid key={category.type} item>
                <Paper
                  onClick={() => {
                    dispatch(setVehicleAction(category.type))
                    history.push('/search')
                  }}
                  className={classes.paper}
                >
                  <img className={classes.img} src={category.image} alt='' />
                  <Typography>
                    <p>{category.type}</p>
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
