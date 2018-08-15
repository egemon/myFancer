import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Button,
} from 'react-native'
import { selectedPlayerIdsSelector } from '../../../redux/data/games/reducer'
import { togglePlayer } from './tasks/togglePlayer'
import styles from './styles'
import PlayerList from './PlayerList/PlayerList'
import PlayerFilter from './PlayerFilter/PlayerFilter'
import connector from '../../../redux/utils/connector'
import { usersSelector } from '../../../redux/data/users/reducer'
import { makeUser } from './tasks/makeUser'

class Players extends PureComponent {
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
    this.props.makeUser({
      data: {
        name: this.state.filterQuery,
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

Players.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  selectedIds: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,

  makeUser: PropTypes.func.isRequired,
  togglePlayer: PropTypes.func.isRequired,
}

const PlayersC = connector({
  users: usersSelector,
  selectedIds: selectedPlayerIdsSelector,
}, {
  makeUser,
  togglePlayer,
})(Players)

PlayersC.title = 'Players'

export default PlayersC
