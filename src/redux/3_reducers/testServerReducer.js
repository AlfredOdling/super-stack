import {
  TEST_SERVER,
  TEST_SERVER_SUCCESS,
  TEST_SERVER_FAILURE,
} from '../1_actionTypes/testServerActionTypes'

import _initialState from './utils/_initialState'

const initialState = {
  ..._initialState,
  data: {},
}

const testServerReducer = (state = initialState, action) => {
  const { data } = action

  switch (action.type) {
    case TEST_SERVER:
      return {
        ...state,
        data,
        isFetching: true,
        error: false,
        errorMsg: '',
      }
    case TEST_SERVER_SUCCESS:
      return {
        ...state,
        data,
        isFetching: false,
        fetched: true,
        error: false,
        errorMsg: '',
      }
    case TEST_SERVER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMsg: data,
      }

    default:
      return state
  }
}

export default testServerReducer
