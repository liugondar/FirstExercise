import React, { Component } from 'react';
import { View, FlatList, Text, Linking } from 'react-native';
import styles from './styles';
import CellItem from '../../Components/CellItem';
import Data from '../../Data.json';

export default class HomeScreen extends Component {
  renderItem = ({ item }) => {
    return <CellItem
      style={styles.CellItem}
      avatarImageSrc={item.thumbnail_image}
      title={item.title}
      artist={item.artist}
      imageSrc={item.image}
      text="Buy now"
      onPressButton={(event) => this.onPressCellButton(item.url)}
    />
  }

  onPressCellButton = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }

  render() {
    return (
      <View>
        <View style={styles.Header}>
          <Text>
            {'Header'}
          </Text>
        </View>
        <FlatList
          style={styles.FlatList}
          data={Data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
