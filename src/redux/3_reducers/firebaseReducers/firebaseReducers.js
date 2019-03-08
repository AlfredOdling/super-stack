import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import initializeFirebaseReducer from './initializeFirebaseReducer'

// const configLogin = { key: 'loginReducer', storage }

const firebaseReducers = combineReducers({
  initializeFirebaseReducer,
  // loginReducer: persistReducer(configLogin, loginReducer),
})

export default firebaseReducers
