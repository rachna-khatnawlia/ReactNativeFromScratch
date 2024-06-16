//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

// create a component
const Image_ImageBg_Assignment = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/10269534/pexels-photo-10269534.jpeg',
          }}
          style={{
            height: 220,
            width: 140,
            borderRadius: 10,
            overflow: 'hidden',
            padding: 12,
            justifyContent: 'space-between',
            marginRight:10
          }}>
          <Image
            source={require('../Assets/Images/img.jpg')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              borderWidth: 4,
              borderColor: 'blue',
            }}
          />
          <Text style={{color: '#FFF', fontSize: 18}}>Rachna</Text>
        </ImageBackground>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/10269534/pexels-photo-10269534.jpeg',
          }}
          style={{
            height: 220,
            width: 140,
            borderRadius: 10,
            overflow: 'hidden',
            padding: 12,
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../Assets/Images/img.jpg')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              borderWidth: 4,
              borderColor: 'blue',
            }}
          />
          <Text style={{color: '#FFF', fontSize: 18}}>Rachna</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop:1,
    backgroundColor: '#FFFFFF',
  },
});

//make this component available to the app
export default Image_ImageBg_Assignment;
