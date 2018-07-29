import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import styles from './styles'


export default class CompetitionView extends Component {
  static navigationOptions = {
    title: 'Competition',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
Competition view content
        </Text>
      </View>
    )
  }
}
