import React, { Component } from 'react';
import {
  Platform,
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

// import HomeView from './common/views/Home';
import CompetitorsView from './common/views/Competitors';
type Props = {};
let id = 3;
export default class App extends Component<Props> {

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(competitors => this.setState({competitors}))
  }

  constructor (...args) {
    super(...args);
    this.state = {
      competitors: [
        {
          id: 1,
          name: 'Illia LUkianov',
        },
        {
          id: 2,
          name: 'Eugen Tymo',
        },
      ],
    };
  }

  paginate = (arg) => {
    Alert.alert('arg');
  };
  addCompetitor = (competitor) => {
    this.setState({
      id: id++,
      competitors: this.state.competitors.concat(competitor),
    });
  };

  render() {
    return (
      <CompetitorsView
        competitors={this.state.competitors}
        addCompetitor={this.addCompetitor}
      />
    );
  }
}
