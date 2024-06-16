//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Image_ImageBg_Assignment from './src/assignments/13_Image_ImageBg_Assignment';
import Dimension from './src/Components/14_Dimesions';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Dimension />
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
