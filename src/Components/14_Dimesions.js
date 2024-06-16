import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
console.log(screenHeight, screenWidth)
export default function Dimension() {
  return (
    <View style={styles.main}>
      <View style={styles.contentView}>
        <Text style={styles.txt}>Dimensions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  contentView: {
    height: screenHeight > 1000 ? "70%" : "50%",
    width: screenWidth > 500 ? "85%" :"70%",
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {color: 'white', fontSize: screenWidth > 500 ? 35 : 20},
});
