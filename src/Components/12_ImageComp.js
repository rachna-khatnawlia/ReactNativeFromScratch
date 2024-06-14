//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

// create a component
const ImageComp = () => {
  return (
    <View style={styles.container}>
      {/* local image */}
      {/* <Image
        source={require('./src/Assets/Images/img.jpg')}
        style={{height: 250, width: 250}}
        blurRadius={1}
      /> */}

      <View style={{height:20}}/>
      {/* url */}
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/10269534/pexels-photo-10269534.jpeg',
        }}
        style={{height: 200, width:500, backgroundColor:'red'}}
        defaultSource={require('../Assets/Images/img.jpg')}
        resizeMode="center"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ImageComp;
