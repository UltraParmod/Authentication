import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import ButtonWithLoader from '../../components/ButtonWithLoader'
import { useNavigation } from '@react-navigation/native'
import Validatior from '../utails/Validation'
import { showError, showToastError } from '../utails/helperFunction'
import Toast from 'react-native-toast-message'
import FlashMessage from 'react-native-flash-message'

export default function SignUp() {
  const navigation=useNavigation()
    const [state,setState]=useState({
      isLoading:false,
      userName:'',
      email:'',
      password:'',
      isSecure:true
    })
    const {isLoading,email,userName,password,isSecure}=state
    const updateState=(data)=>setState(()=>({...state,...data}))


    const _isValidData=()=>{
      const error=Validatior({
        userName,
        email,
        password
      })
      if(error){
        showToastError(error)
        return false
      }
      return true
    }
    const _onSignUp=()=>{
      // if(email == '' || password ==""){
      //   Alert.alert("Please fill your email and password  ")
      //   return
      // }
      const checkValid=_isValidData()
      if(checkValid){
        navigation.navigate('Home')
      }
    }



  return (
    <View style={styles.container}>
      <View style={{zIndex:999}}>
      <Toast />
      </View>
    

      <View style={styles.inputContainer}>
      <TextInputWithLabel 
   label={'User name'}
    placeholder={"enter your user name"}
    onChangeText={(userName)=>updateState({userName})}
   />
   <TextInputWithLabel 
   label={'Email'}
   labelStyle={{marginTop:10}}
    placeholder={"enter your email"}
    onChangeText={(email)=>updateState({email})}
   />

   <TextInputWithLabel 
   label={'Password'}
   labelStyle={{marginTop:10}}
    placeholder={"enter your email"}
    isSecure={isSecure}
    onChangeText={(password)=>updateState({password})}
   />
      </View>
<View style={styles.btnContianer}>
<ButtonWithLoader text={"SignUp"} 
  onPress={_onSignUp}
/>  


</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:'white'
  },
  inputContainer:{
   
  },
  btnContianer:{
    marginVertical:20
  }
})