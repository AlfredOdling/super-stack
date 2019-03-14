import React from 'react'
import { View } from 'react-native'
import { layout } from '../styles/_base'
import { _Text } from './general/_Text'
import { _Image } from './general/_Image'

const { _flexColumn, _spaceCrossAxis } = layout
const _styleText = {
  ..._flexColumn,
  ..._spaceCrossAxis['flexStart'],
  marginLeft: 20,
}

export const ProfileBrick = () => (
  <View
    style={{
      shadowOffset: { width: 0, height: 0 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: 7,
    }}>
    <View style={{ ...layout._flexRow, ...layout._spaceMainAxis }}>
      <View style={{ _styleText }}>
        <_Text text={'Anna Hellström'} type="rr_16_yellow" />
        <_Text text={'25 år, Stockholm'} type="rr_16_yellow" />
        <_Text text={'LinkedIn'} type="rm_16_white" />
      </View>
    </View>
  </View>
)
