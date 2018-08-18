import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TextInput,
  Button,
} from 'react-native'


// TODO: Add recompose, use pure mixin

// eslint-disable-next-line
export default class PlayerFilter extends PureComponent {
  render() {
    const {
      value,
      onChange,
      onCreateUser,
    } = this.props

    return (
      <View>
        <TextInput value={value} onChangeText={onChange} />
        <Button onPress={onCreateUser} title="Create User" />
      </View>
    )
  }
}

PlayerFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCreateUser: PropTypes.func.isRequired,
}
