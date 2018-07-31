import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  FlatList,
} from 'react-native'

import styles from './styles'
import Competitor from './Competitor'
import CompetitorForm from './CompetitorForm'

export default class Competitors extends Component {
  getKeyFromCompetitor = competitor => competitor.id

  renderCompetitor = ({ item }) => <Competitor name={item.name} />

  render() {
    const {
      addCompetitor,
      competitors,
    } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Competitors List
        </Text>
        <CompetitorForm handleSubmitEditing={addCompetitor} />

        <FlatList
          contentContainerStyles={styles.list}
          data={competitors}
          renderItem={this.renderCompetitor}
          keyExtractor={this.getKeyFromCompetitor}
        />
      </View>
    )
  }
}

Competitors.propTypes = {
  addCompetitor: PropTypes.func.isRequired,
  competitors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}
