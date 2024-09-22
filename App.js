import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Route from './src/Navigations/Route'
import FlashMessage from 'react-native-flash-message'

export default function App() {
  return (
    <View style={{flex:1}}>
      <FlashMessage 
        position='top'
      />
      <Route />
    </View>
  )
}

const styles = StyleSheet.create({})