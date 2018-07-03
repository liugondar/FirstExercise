import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import CellButton from '../CellButton';
import styles from './styles';

export default class CellItem extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={{ url: this.props.avatarImageSrc }}
              style={{ width: 50, height: 50 }}
            />
          </View>

          <View style={styles.headerMiddle}>
            <View style={styles.headerMiddleTitle}>
              <Text>
                {this.props.title}
              </Text>
            </View>

            <View style={styles.headerMiddleDescription}>
              <Text>
                {this.props.artist}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <Image
            source={{ url: this.props.imageSrc }}
            style={styles.thumbnailImage}
            resizeMode="cover"
          />
        </View>

        <View
          style={styles.footer}
        >
          <CellButton
            style={styles.cellButton}
            onPress={this.props.onPressButton}
          >
            <Text style={styles.textButton}>
              Buy Now
            </Text>
          </CellButton>
        </View>
      </View>
    );
  }
}
