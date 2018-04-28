import React, { Component } from 'react';
import {
  TextInput,
  View,
  Button,
} from 'react-native';

import styles from './styles';

export default class CompetitorForm extends Component<Props> {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  handleSubmitEditing = () => {
    this.props.handleSubmitEditing({
      name: this.state.name,
    });
    this.setState({name: ''});
  };

  handleChangeText = (name) => this.setState({name});
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter name here"
          onChangeText={this.handleChangeText}
          value={this.state.name}
        />
        <Button
          title="Add player"
          onPress={this.handleSubmitEditing}
        />
      </View>
    );
  }
};
