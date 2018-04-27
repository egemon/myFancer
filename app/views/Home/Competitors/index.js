import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import styles from './styles';
import Competitor from './Competitor';
import CompetitorForm from './CompetitorForm';

export default class Competitors extends Component<Props> {
  getKeyFromCompetitor = competitor => '' + competitor.id;
  renderCompetitor({item}) {
    return <Competitor name={item.name} />;
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Competitors List
        </Text>
        <CompetitorForm handleSubmitEditing={this.props.addCompetitor}/>

        <FlatList
          contentContainerStyles={styles.list}
          data={this.props.competitors}
          renderItem={this.renderCompetitor}
          keyExtractor={this.getKeyFromCompetitor}
        />
      </View>
    );
  }
};
