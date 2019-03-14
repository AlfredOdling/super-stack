import React from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native'

import { Hamburger } from '../components/Hamburger'
import { Box } from '../components/Box'
import { CTAButton } from '../components/CTAButton'
import { AttentionText } from '../components/AttentionText'
import { HomeScreenStyles } from '../styles/HomeScreenStyles'

export const HomeScreen = ({ data }) => {
  return (
    <ScrollView style={HomeScreenStyles}>
      <Hamburger props={this.props} />
      <AttentionText />
      <CTAButton />
      <Box index={1} />
      <Box index={2} />
      <Box index={3} />
    </ScrollView>
  )
}
