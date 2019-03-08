import { INITIALIZE_FIREBASE } from '../../1_actionTypes/firebaseActionTypes/initFirebaseActionTypes'

import _initialState from '../utils/_initialState'

const initialState = {
  ..._initialState,
  data: {},
}

const initializeFirebaseReducer = (state = initialState, action) => {
  const { data } = action

  switch (action.type) {
    case INITIALIZE_FIREBASE:
      return {
        ...state,
        data,
        isFetching: true,
        error: false,
        errorMsg: '',
      }

    default:
      return state
  }
}

export default initializeFirebaseReducer
