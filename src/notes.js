import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { Router, Switch, Route } from './routing'
import Home from './Home'
import Pokemon from './Pokemon'
const dimHeight = Dimensions.get('window').height
const dimWidth = Dimensions.get('window').width

export default class App extends React.Component {
  state = {
    selectedPokemon: null,
  }
  selectPokemon = selectedPokemon => {
    this.setState({
      selectedPokemon,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home {...props} selectPokemon={this.selectPokemon} />
                )}
              />
              <Route
                path="/pokemon"
                render={props => (
                  <Pokemon
                    selectedPokemon={this.state.selectedPokemon}
                    {...props}
                  />
                )}
              />
            </Switch>
          </Router>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subcontainer: {
    height: dimHeight * 0.6,
    width: dimWidth * 0.6,
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: dimWidth * 0.1,
    margin: dimWidth * 0.1,
  },
})
