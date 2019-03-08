import { INITIALIZE_FIREBASE } from '../../1_actionTypes/firebaseActionTypes/initFirebaseActionTypes'

export default function _initializeFirebase(type) {
  return async dispatch => {
    dispatch(INITIALIZE_FIREBASE)
  }
}

export { INITIALIZE_FIREBASE }
