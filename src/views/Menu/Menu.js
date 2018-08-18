import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import connect from 'react-redux/es/connect/connect'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { makeGame } from './tasks/makeGame'

const MenuV = ({
  makeGame: hanldePress,
}) => (
  <View>
    <Button
      title="New Game"
      onPress={hanldePress}
      icon={{ name: 'add-circle-outline' }}
    />
  </View>
)

MenuV.propTypes = {
  makeGame: PropTypes.func.isRequired,
}
MenuV.defaultProps = {

}

const MenuC = connect(
  createStructuredSelector({

  }),
  dispatch => bindActionCreators({
    makeGame,
  }, dispatch),
)(MenuV)

export default MenuC
