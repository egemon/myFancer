import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  FlatList,
} from 'react-native'
import { Text } from 'react-native-elements'

import PlayerListItem from './PlayerListItem/PlayerListItem'


// TODO: Add recompose, use pure mixin

// eslint-disable-next-line
export default class PlayerList extends PureComponent {
  renderItem = ({ item }) => (
    <PlayerListItem
      key={item.id}
      player={item}
      isSelected={this.props.selectedIds.includes(item.id)}
      onPress={this.props.onPlayerPress}
    />
  )

  render() {
    const {
      players,
    } = this.props

    return (
      <View>
        {players.length
          ? (
            <FlatList
              data={players}
              renderItem={this.renderItem}
            />
          )
          : (
            <Text>
              No users find by this text, you can create one if needed
            </Text>
          )
        }
      </View>
    )
  }
}

PlayerList.propTypes = {
  players: PropTypes.x.users.isRequired,
  onPlayerPress: PropTypes.func.isRequired,
  selectedIds: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
}
