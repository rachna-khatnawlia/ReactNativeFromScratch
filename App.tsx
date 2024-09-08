import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import PressableComp from './src/Components/22_Pressable'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <PressableComp/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})