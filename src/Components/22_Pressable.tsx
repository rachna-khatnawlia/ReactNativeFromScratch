//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';

// create a component
// onPress: Called when the component is pressed and released.

// onPressIn: Called when the touch is started.

// onPressOut: Called when the touch is released outside the component’s bounds.

// onLongPress: Called when the component is pressed for a long duration.

// style: Accepts a function that receives an object containing touch state information (e.g., pressed) to dynamically apply styles based on the touch state.

// disabled: When set to true, disables the component's press events and styling changes.

// hitSlop: Defines an area around the component that will be considered as part of the touchable area, making it easier for users to interact with the component.
const PressableComp = () => {
  return (
    <View style={{padding: 15}}>
      <Text style={styles.heading}>React Native Pressable Button</Text>
      <Text style={styles.dummyText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde amet
        fugiat explicabo perferendis? Repudiandae, libero sint quibusdam magni
        nam saepe illum necessitatibus inventore quae, dolorem accusantium esse
        quia animi asperiores sunt architecto repellat reiciendis ipsa
        temporibus aliquam aliquid! Nam optio libero voluptatem, est quo
        tempora, obcaecati perferendis saepe nostrum molestias quasi! Debitis
        accusantium pariatur et, id consequatur voluptatibus molestias odit
        dolorem tenetur repellendus ratione non vel. Deserunt magni in ut?
      </Text>
      {/* <View style={{backgroundColor: 'red', padding: 50}}> */}
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'plum',
            padding: 10,
          },
        ]}
        onPress={() => alert('pressed')}
        // onPressIn={() => console.log('pressedIn')}
        // onPressOut={() => console.log('pressedOut')}
        // onLongPress={() => console.log('On Long Press')}
        // disabled={true}
        // hitSlop={50}
      >
        <Text style={styles.btnText}>Pressable Button</Text>
      </Pressable>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  dummyText: {
    fontSize: 17,
    lineHeight: 24,
    color: '#222222',
    fontWeight: '600',
    marginBottom: 20,
  },
  BtnView: {
    height: 50,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // width: 100,
  },
  btnText: {fontSize: 16, color: 'white', fontWeight: 'bold'},
});

//make this component available to the app
export default PressableComp;
