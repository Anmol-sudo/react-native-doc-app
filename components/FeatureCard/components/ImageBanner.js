import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const image = require('../../../assets/devices.png');

function ImageBanner() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="contain" style={styles.image} />
      </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.4, // Adjust this value to change the height of the banner
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageBanner;

