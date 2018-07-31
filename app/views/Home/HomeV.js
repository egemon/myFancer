import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Button,
} from 'react-native'

import styles from './styles'
import Competitors from './Competitors'


const generaCompetitors = []
for (let i = 0; i < 6; i++) {
  generaCompetitors.push({ id: i + 1, name: `name-${i + 1}` })
}

function getAllCombination(competitors) {
  const combinations = []
  const middle = Math.round(competitors.length / 2)
  const team1 = competitors.slice(0, middle)
  const team2 = competitors.slice(middle)
  for (let i = 0; i < team1.length; i++) {
    for (let j = 0; j < team2.length; j++) {
      combinations.push({
        competitor1: team1[(i + j) % team1.length].id,
        competitor2: team2[j].id,
      })
    }
  }

  const combinationsInsideTeam1 = team1.length > 1 ? getAllCombination(team1) : []
  const combinationsInsideTeam2 = team2.length > 1 ? getAllCombination(team2) : []
  return combinations.concat(combinationsInsideTeam1, combinationsInsideTeam2)
}
class HomeView extends PureComponent {
  static navigationOptions = {
    title: 'Home',
  }

  startGame = () => {
    const {
      navigation,
    } = this.props

    navigation.navigate('Competition', { id: 'new' })
  }

  render() {
    const {
      users,
      createUser,
    } = this.props

    console.log('users', getAllCombination(generaCompetitors))
    return (
      <View style={styles.container}>
        <Competitors
          competitors={users}
          addCompetitor={createUser}
        />
        <Button
          title="Start the game"
          onPress={this.startGame}
          style={styles.startBtn}
        />
      </View>
    )
  }
}

HomeView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  createUser: PropTypes.func.isRequired,
}

HomeView.defaultProps = {
}

export default HomeView
