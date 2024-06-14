//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

// create a component
const ImageBg = () => {
  return (
    <View style={styles.container}>
      {/* local path */}
      {/* <ImageBackground
        source={require('../Assets/Images/img.jpg')}
        style={styles.bg}>
        <View style={{backgroundColor: 'black', padding: 20}}>
          <Image
            style={{height: 100, width: 100}}
            source={require('../Assets/Images/img.jpg')}></Image>
          <Text style={{color: 'white'}}>
            Hello, Please Subscribe to my channel!
          </Text>
        </View>
      </ImageBackground> */}

      {/* online URL */}
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/10269534/pexels-photo-10269534.jpeg',
        }}
        style={styles.bg}>
        <View style={{backgroundColor: 'black', padding: 20}}>
          {/* <Image
            style={{height: 100, width: 100}}
            source={require('../Assets/Images/img.jpg')}></Image> */}
          <Text style={{color: 'white'}}>
            Hello, Please Subscribe to my channel!
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  bg: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ImageBg;
