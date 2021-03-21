import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Container,
} from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { store } from '../Store/Store'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import data from '../Data/Data.json'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import { AttachMoney, PeopleOutlined } from '@material-ui/icons'
import GoogleMap from '../GoogleMap/GoogleMap'
import { setResultsAction } from '../Action/action'

const Search = () => {
  const { state, dispatch } = useContext(store)
  const { vehicle, results: allResults } = state
  const [from, setFrom] = useState('')
  const [results, setResults] = useState([])
  console.log(results)
  const [click, setClick] = useState(false)

  const [to, setTo] = useState('')
  console.log(from, to)
  useEffect(() => {
    dispatch(setResultsAction(data.results))
  }, [])
  return (
    <Container>
      <Box m={12} />

      <Grid container spacing={5}>
        <Grid item lg={4}>
          {!click ? (
            <>
              {' '}
              <form
                onSubmit={() => {
                  setClick(true)
                  const results = allResults.filter(
                    (item) => item.type === vehicle
                  )
                  setResults(results)
                }}
              >
                <TextField
                  onChange={(event) => {
                    setFrom(event.target.value)
                  }}
                  label='Pick from'
                  fullWidth
                  required
                />
                <TextField
                  onChange={(event) => {
                    setTo(event.target.value)
                  }}
                  label='Pick To'
                  fullWidth
                  required
                />
                <Button
                  style={{ marginTop: '25px' }}
                  type='submit'
                  variant='contained'
                  color='primary'
                >
                  Search
                </Button>{' '}
              </form>
            </>
          ) : (
            <>
              <Timeline>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{from}</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>{to}</TimelineContent>
                  </TimelineItem>
                </div>
              </Timeline>
              <Grid container>
                {results.map((res) => (
                  <Grid item xs={12}>
                    <Card>
                      <List component='nav' aria-label='main mailbox folders'>
                        <ListItem button>
                          <ListItemIcon>
                            <img
                              style={{
                                width: '40px',
                              }}
                              src={res.image}
                              alt=''
                            />
                          </ListItemIcon>
                          <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
                          <ListItemText primary={res.type} />
                          <ListItemIcon>
                            <PeopleOutlined />
                          </ListItemIcon>
                          <ListItemText primary={res.capacity} />
                          <ListItemIcon>
                            <AttachMoney />
                          </ListItemIcon>
                          <ListItemText primary={res.fare} />
                        </ListItem>
                      </List>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Grid>
        <Grid item lg={8}>
          <GoogleMap />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Search
