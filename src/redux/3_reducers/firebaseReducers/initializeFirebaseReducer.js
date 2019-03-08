import { INITIALIZE_FIREBASE } from '../../1_actionTypes/firebaseActionTypes/initFirebaseActionTypes'

const initialState = {
  info: INITIALIZE_FIREBASE,
}

const initializeFirebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_FIREBASE:
      return {
        ...state,
        info: INITIALIZE_FIREBASE,
      }

    default:
      return state
  }
}

export default initializeFirebaseReducer
