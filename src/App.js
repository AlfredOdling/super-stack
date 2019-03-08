import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from './Routes'
import configureStore from './redux/store'

const { store, persistor } = configureStore()
export const getStore = () => store

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App
