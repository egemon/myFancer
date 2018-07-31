import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})


const Menu = ({
  createGame,
}) => (
  <View style={styles.container}>
    <Button
      title="New Game"
      onPress={createGame}
      icon={{ name: 'add-circle-outline' }}
    />
  </View>
)

Menu.propTypes = {
  createGame: PropTypes.func.isRequired,
}
Menu.defaultProps = {

}

export default Menu
