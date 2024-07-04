import {StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight} from 'react-native';
import React from 'react';
//----button : limited styling
// title
// color -text color(ios), bg color(android)
// onpress
// disbaled

//----TouchableHighlight- A wrapper for making views respond properly to touches.
//style
//activeOpacity
//disabled
//onLongPress
//onPress
//underlayColor

//TouchableOpacity - A wrapper for making views respond properly to touches.
//On press down, the opacity of the wrapped view is decreased, dimming it.
//style
//activeOpacity
//disabled
//onLongPress
//onPress

export default function BtnVsTouchOpacVsTouchHigh() {
  return (
    <View style={{padding: 20}}>
      <Text style={styles.heading}>Button - TouchOpacity - TouchHighlight</Text>
      <Button
        title="React Native Button"
        color={'plum'}
        onPress={() => alert('ok Pressed')}
        // disabled={true}
      />

      <TouchableOpacity
        style={styles.BtnView}
        activeOpacity={0.2}
        // disabled={true}
        onPress={() => {
          alert('ok pressed!');
        }}
        onLongPress={() => {
          alert('ok Long pressed!');
        }}
        >
        <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
          TouchableOpacity React Native
        </Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.BtnView}
        activeOpacity={0.2}
        disabled={true}
        underlayColor={"red"}
        onPress={() => {
          alert('ok pressed!');
        }}
        onLongPress={() => {
          alert('ok Long pressed!');
        }}
        >
        <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
          TouchableHighlight React Native
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    // textDecorationLine: 'underline',
    marginBottom: 15,
  },
  BtnView: {
    height: 50,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 15,
  },
  btnText: {fontSize: 16, color: 'white', fontWeight: 'bold'},
});
