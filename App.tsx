//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} hidden={true}/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'plum'
  },
});

//make this component available to the app
export default App;
