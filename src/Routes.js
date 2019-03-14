import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Router, Switch, Route } from './routing'
import { Home } from './platforms/Home'

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

// const mapStateToProps = state => ({
//   initializeFirebaseReducer: state.firebaseReducers.initializeFirebaseReducer,
// })
// const mapDispatchToProps = { _initializeFirebase }

export default connect(
  undefined,
  undefined
)(Routes)
