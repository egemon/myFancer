import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import styles from './styles';

export default class CompetitionView extends Component<Props> {
  static navigationOptions = {
    title: 'Competition',
  };

  render () {
    return (
      <View style={styles.container}>
        <Text>Competition view content</Text>
      </View>
    );
  }
};
