import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { runCreateGame } from './tasks/newGame'
import connector from '../../redux/utils/connector'


const MenuV = ({
  runCreateGame: handlePress,
}) => (
  <View>
    <Button
      title="New Game"
      onPress={handlePress}
      icon={{ name: 'add-circle-outline' }}
    />
  </View>
)

MenuV.propTypes = {
  runCreateGame: PropTypes.func.isRequired,
}
MenuV.defaultProps = {

}

const MenuC = connector({

}, {
  runCreateGame,
})(MenuV)

export default MenuC
