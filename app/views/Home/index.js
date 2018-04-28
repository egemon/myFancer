import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
} from 'react-native';

import styles from './styles';
import Competitors from './Competitors';
import TrackNumber from './TrackNumber'
import {editTruckNumber, createCompetitor} from '../../actions';


// Alert.alert(JSON.stringify(editTruckNumber));
// Alert.alert(JSON.stringify(creatCompetitor));
class HomeView extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  startGame = () => {
    this.props.navigation.navigate('Competition', {id: 'new'});
  };

  render () {

    return (
      <View style={styles.container}>
        <TrackNumber
          style={styles.startBtn}
          onChange={this.props.editTruckNumber}
          value={this.props.trackNumber}
        />
        <Competitors
          competitors={this.props.competitors}
          addCompetitor={this.props.createCompetitor}
        />
        <Button
          title="Start the game"
          onPress={this.startGame}
          style={styles.startBtn}
        />
      </View>
    );
  }
}

export default connect((state) => {
  return {
    trackNumber: state.trackNumber,
    competitors: state.competitors,
  };
}, {
  editTruckNumber,
  createCompetitor
})(HomeView)
