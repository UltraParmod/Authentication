import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function TextInputWithLabel({
    label,
    value,
    placeholder,
    // inputStyle,
    // textStyle,
    isSecure,
    onChangeText,
    labelStyle,
    
    ...props
}) {
  return (
    <View>
        <Text style={{...styles.label,...labelStyle}}>{label}</Text>
      <TextInput 
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        secureTextEntry={isSecure}
        {...props}
        placeholderTextColor='gray'
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
    inputStyle:{
        height:43,
        borderWidth:1,
        borderColor:'gray',
        color:'black',
        paddingHorizontal:10,
        backgroundColor:'white'

    },
    label:{
        fontSize:16,
        marginBottom:5,
        color:'black',
        fontWeight:'500'
    }

})