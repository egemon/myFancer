import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';

import styles from './styles';

export default class TrackNumber extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Enter number of tracks:
        </Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          onChangeText={this.props.onChange}
          value={this.props.value}
        />
      </View>
    );
  }
};
