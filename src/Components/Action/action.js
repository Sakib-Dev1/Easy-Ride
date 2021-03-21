import {
  GET_CATEGORIES,
  GET_RESULTS,
  SET_RESULTS,
  SET_USER,
  SET_VEHICLE,
} from './actiontype'

export const getCategoriesAction = (categories) => {
  console.log({
    action: categories,
  })
  return {
    type: GET_CATEGORIES,
    payload: categories,
  }
}

export const getResultsAction = (results) => {
  return {
    type: GET_RESULTS,
    payload: results,
  }
}
export const setUserAction = (user) => {
  return {
    type: SET_USER,
    payload: user,
  }
}
export const setVehicleAction = (vehicle) => {
  return {
    type: SET_VEHICLE,
    payload: vehicle,
  }
}
export const setResultsAction = (results) => {
  return {
    type: SET_RESULTS,
    payload: results,
  }
}
