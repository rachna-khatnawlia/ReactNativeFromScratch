//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Image_ImageBg_Assignment from './src/assignments/13_Image_ImageBg_Assignment';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Image_ImageBg_Assignment/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

//make this component available to the app
export default App;
