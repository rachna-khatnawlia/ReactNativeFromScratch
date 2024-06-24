import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

// title
// color -text color(ios), bg color(android)
// onpress
// disbaled

export default function ButtonComp() {
  return (
    <View style={{padding: 15}}>
      <Text style={styles.heading}>React Native Button</Text>
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
      <Button
        title="ok"
        color={'plum'}
        onPress={() => alert('ok Pressed')}
        // disabled={true}
      />
    </View>
  );
}

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
    marginBottom:20
  },
});
