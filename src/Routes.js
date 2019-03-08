import React from 'react'
import { View } from 'react-native'
import { Router, Switch, Route } from './routing'
import { Home } from './Home'

export default class Routes extends React.Component {
  render() {
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
}
