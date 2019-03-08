import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Router, Switch, Route } from './routing'
import { Home } from './Home'
import _initializeFirebase from './redux/2_actions/firebaseActions/initializeFirebaseAction'
// import { signInWithFacebook, signInWithGoogle } from './utils/auth/auth'
// https://stackoverflow.com/questions/48867910/how-can-we-use-firebase-analytics-with-an-expo-based-react-native-app

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

const mapStateToProps = state => ({
  initializeFirebaseReducer: state.firebaseReducers.initializeFirebaseReducer,
})
const mapDispatchToProps = { _initializeFirebase }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)
