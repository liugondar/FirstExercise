import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class CellButton extends Component {
  render() {
    const opacity = this.props.disable ? 1 : 0.5;
    return (
      <TouchableOpacity
        style={[styles.touchable, this.props.style]}
        onPress={this.props.onPress}
        activeOpacity={opacity}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
