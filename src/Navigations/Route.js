import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();
export default function Route() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
       

        {false ? 
  MainStack(Stack)
  :
  AuthStack(Stack)

}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})




