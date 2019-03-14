import React from 'react'
import { View } from 'react-native'
import { Router, Switch, Route } from './routing'
import Home from './Home'

const Routes = ({ data }) => {
  return (
    <View>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </View>
  )
}

export default Routes
