import React from 'react'
import { Text, View, TouchableOpacity, Dra } from 'react-native'
import Drawer from 'react-native-drawer'

// export const Hamburger = ({ props }) => {
//   const { navigation } = props
//   const { dispatch } = navigation

//   return (
//     <TouchableOpacity onPress={() => dispatch(DrawerActions.toggleDrawer())} />
//   )
// }

export class Hamburger extends React.Component {
  closeControlPanel = () => {
    this._drawer.close()
  }
  openControlPanel = () => {
    this._drawer.open()
  }
  render() {
    return (
      <Drawer
        ref={ref => (this._drawer = ref)}
        content={
          <View>
            <Text>whut</Text>
          </View>
        }>
        <View>
          <Text>whut dafuk</Text>
        </View>
      </Drawer>
    )
  }
}
