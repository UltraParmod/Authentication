import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ButtonWithLoader({
    text,
    onPress
}) {
  return (
    <TouchableOpacity style={styles.contianer} 
        onPress={onPress}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    contianer:{
        height:45,
        borderWidth:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textStyle:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16

    }
})