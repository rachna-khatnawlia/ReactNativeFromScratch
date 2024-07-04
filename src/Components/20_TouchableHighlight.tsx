import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

//A wrapper for making views respond properly to touches.
//style
//activeOpacity
//disabled
//onLongPress
//onPress

const TouchableHighlightComp = () => {
  return (
    <View style={{padding: 15}}>
      <Text style={styles.heading}>React Native TouchableHighlight Button</Text>
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
        
        <TouchableHighlight 
            style={styles.BtnView}
            activeOpacity={0.2}
            // disabled={true}
            onPress={() => {
                alert("highlight pressed!")
              }}
              onLongPress={() => {
                alert("highlight Long pressed!")
              }}
              underlayColor={"red"}
        >
            <Text style={styles.btnText}>Hightlight Button</Text>
        </TouchableHighlight>
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
  },
  btnText: {fontSize: 16, color: 'white', fontWeight: 'bold'},
});

export default TouchableHighlightComp;
