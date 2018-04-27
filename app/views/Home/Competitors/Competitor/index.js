import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './styles';

export default class Competitor extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          - {this.props.name}
        </Text>
      </View>
    );
  }
};
