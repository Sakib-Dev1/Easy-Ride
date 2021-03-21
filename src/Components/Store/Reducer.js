import {
  GET_CATEGORIES,
  GET_RESULTS,
  SET_RESULTS,
  SET_USER,
  SET_VEHICLE,
} from '../Action/actiontype'

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      }
    case GET_RESULTS:
      return {
        ...state,
        results: [...state.results, ...action.payload],
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case SET_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
      }
    case SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      }
    default:
      return state
  }
}

export default reducer
