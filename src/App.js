import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from './Routes'
import configureStore from './redux/store'

const { store, persistor } = configureStore()
export const getStore = () => store

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Provider store={store}>
          <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </View>
    )
  }
}
