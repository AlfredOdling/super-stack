import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import userReducers from './3_reducers/userReducers/userReducers'
import navigationReducer from './3_reducers/navigationReducer'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/es/storage'

const rootReducer = combineReducers({
  userReducers, // Persisting in reducer
  navigationReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function configureStore() {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)) //logger
  )
  let persistor = persistStore(store)

  /*
  import { AppState } from 'react-native'
  If the app is closed
  AppState.addEventListener('change', state => {
      // 'active', 'inactive', 'background'
    if (state === 'background') {
      console.log('Running sync in background...')
      // store.dispatch(doSomethingInBackground())
    }
  })
*/

  return { persistor, store }
}

export default configureStore
