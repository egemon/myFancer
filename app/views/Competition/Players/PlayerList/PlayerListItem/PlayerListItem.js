import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { CheckBox } from 'react-native-elements'


// TODO: Add recompose, use pure mixin
// eslint-disable-next-line
export default class PlayerListItem extends PureComponent {
  handlePress = () => {
    this.props.onPress(this.props.player, this.props.isSelected)
  }

  render() {
    const {
      player,
      isSelected,
    } = this.props

    return (
      <CheckBox
        title={player.name}
        checked={isSelected}
        onPress={this.handlePress}
      />

    )
  }
}

PlayerListItem.propTypes = {
  player: PropTypes.x.user.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
}
