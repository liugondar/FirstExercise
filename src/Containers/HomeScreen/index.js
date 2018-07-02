import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import CellItem from '../../Components/CellItem';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <CellItem
          style={styles.CellItem}
          headerMiddleTitle="title test"
          headerMiddleDescription="Description test"
        />
      </View>
    );
  }
}
