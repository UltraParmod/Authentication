import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import ButtonWithLoader from '../../components/ButtonWithLoader'
import { useNavigation } from '@react-navigation/native'
import Validatior from '../utails/Validation'
import { showError, showToastError } from '../utails/helperFunction'
import Toast from 'react-native-toast-message'
import FlashMessage from 'react-native-flash-message'

export default function Login() {
  const navigation=useNavigation()
    const [state,setState]=useState({
      isLoading:false,
      email:'',
      password:'',
      isSecure:true
    })
    const {isLoading,email,password,isSecure}=state
    const updateState=(data)=>setState(()=>({...state,...data}))


    const _isValidData=()=>{
      const error=Validatior({
        email,
        password
      })
      if(error){
        showToastError(error)
        return false
      }
      return true
    }
    const _onLogin=()=>{
      // if(email == '' || password ==""){
      //   Alert.alert("Please fill your email and password  ")
      //   return
      // }

      const checkValid=_isValidData()
      if(checkValid){
        navigation.navigate('SingUp')
      }
    }



  return (
    <View style={styles.container}>
      <View style={{zIndex:999}}>
      <Toast />
      </View>
    

      <View style={styles.inputContainer}>
   <TextInputWithLabel 
   label={'Email'}
    placeholder={"enter your email"}
    onChangeText={(email)=>updateState({email})}
   />

   <TextInputWithLabel 
   label={'Password'}
   labelStyle={{marginTop:15}}
    placeholder={"enter your email"}
    isSecure={isSecure}
    onChangeText={(password)=>updateState({password})}
   />
      </View>
<View style={styles.btnContianer}>
<ButtonWithLoader text={"Login"} 
  onPress={_onLogin}
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