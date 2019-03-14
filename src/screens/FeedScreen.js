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
import { AdBox } from '../components/AdBox'
import { CTAButton } from '../components/CTAButton'
import { AttentionText } from '../components/AttentionText'
import { HomeScreenStyles } from '../styles/HomeScreenStyles'

export default class FeedScreen extends React.Component {
  render() {
    return (
      <ScrollView style={HomeScreenStyles}>
        <Hamburger props={this.props} />
        <CTAButton />

        <AdBox index={1} />
        <AdBox index={1} />
        <AdBox index={1} />
        <AdBox index={1} />
        <AdBox index={1} />
      </ScrollView>
    )
  }
}
