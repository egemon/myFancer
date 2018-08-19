import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Button, List, ListItem } from 'react-native-elements'
import connect from 'react-redux/es/connect/connect'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { lifecycle, compose, pure } from 'recompose'
import { allGamesSelector } from '../../redux/data/games/reducer'
import { makeGame } from './tasks/makeGame'
import { getAllGames } from './tasks/getAllGames'

const MenuC = compose(
  connect(
    createStructuredSelector({
      allGames: allGamesSelector,
    }),
    dispatch => bindActionCreators({
      getAllGames,
      makeGame,
    }, dispatch),
  ),
  pure,
  lifecycle({
    componentDidMount() {
      this.props.getAllGames()
    },
  }),
)

const MenuV = ({
  makeGame: hanldePress,
  allGames,
}) => (
  <View>
    <List>
      {
        allGames.map(game => (
          <ListItem
            key={game.id}
            title={moment(game.date).format()}
          />
        ))
      }
    </List>
    <Button
      title="New Game"
      onPress={hanldePress}
      icon={{ name: 'add-circle-outline' }}
    />
  </View>
)

MenuV.propTypes = {
  makeGame: PropTypes.func.isRequired,
  allGames: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number.isRequired,
  })).isRequired,
}

MenuV.defaultProps = {

}


export default MenuC(MenuV)
