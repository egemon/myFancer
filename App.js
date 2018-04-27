import React, { Component } from 'react';
import {
  Platform,
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {Provider} from 'react-redux'
import store from './app/services/store';
import Navigator from './app/views/Navigator';

type Props = {};
// let id = 3;
export default class App extends Component<Props> {

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(competitors => this.setState({competitors}))
  // }

  // constructor (...args) {
  //   super(...args);
  //   this.state = {
  //     trackNumber: '0',
  //     competitors: [],
  //   };
  // }
  //
  // startGame = () => {
  //   Alert.alert('The game begin!');
  // // };
  //
  // addCompetitor = (competitor) => {
  //   this.setState({
  //     id: id++,
  //     competitors: this.state.competitors.concat(competitor),
  //   });
  // };

  // updateTrackNumber = (trackNumber) => {
  //   this.setState({trackNumber});
  // };

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
