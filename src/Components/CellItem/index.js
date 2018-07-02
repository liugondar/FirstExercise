import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default class CellItem extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {this.props.headerAvatar}
          </View>

          <View style={styles.headerMiddle}>
            <View style={styles.headerMiddleTitle}>
              <Text>
                {this.props.headerMiddleTitle}
              </Text>
            </View>

            <View style={styles.headerMiddleDescription}>
              <Text>
                {this.props.headerMiddleTitle}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          {this.props.content}
        </View>

        <View style={styles.footer}>
          {this.props.footer}
        </View>
      </View>
    );
  }
}
