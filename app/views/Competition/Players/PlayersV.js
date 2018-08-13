import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Button,
} from 'react-native'
import styles from './styles'
import PlayerList from './PlayerList/PlayerList'
import PlayerFilter from './PlayerFilter/PlayerFilter'

// eslint-disable-next-line
export default class PlayersV extends PureComponent {
  state = {
    filterQuery: '',
  }

  updateFilterQuery = filterQuery => this.setState({ filterQuery })

  filterPlayers = (users) => {
    const {
      filterQuery,
    } = this.state

    return users.filter(player => player.name.includes(filterQuery))
  }

  handleCreateUser = () => {
    const {
      createUser,
    } = this.props

    const {
      filterQuery,
    } = this.state

    createUser({
      data: {
        name: filterQuery,
      },
      actions: {
        clearQuery: () => this.updateFilterQuery(''),
      },
    })
  }

  togglePlayer = (player, isSelected) => {
    // TODO: colocate this somehow with sagas, as this data goes directly there
    this.props.togglePlayer({
      data: {
        player,
        wasSelected: isSelected,
      },
    })
  }

  handleButtonPress = () => {
    console.log('start game')
  }

  render() {
    const {
      users,
    } = this.props

    const {
      filterQuery,
    } = this.state


    return (
      <View style={styles.container}>
        <View>
          <PlayerFilter
            value={filterQuery}
            onCreateUser={this.handleCreateUser}
            onChange={this.updateFilterQuery}
          />
          <PlayerList
            players={this.filterPlayers(users)}
            onPlayerPress={this.togglePlayer}
            selectedIds={this.props.selectedIds}
          />
          <Button onPress={this.handleButtonPress} title="Start Game" />
        </View>
      </View>
    )
  }
}

PlayersV.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  createUser: PropTypes.func.isRequired,
  togglePlayer: PropTypes.func.isRequired,
  selectedIds: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
}
