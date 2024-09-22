
import React from 'react';
import {Login, SignUp} from '../screens/index';

export default function(Stack){
  return (
    <>
      <Stack.Screen name="SingUp" component={SignUp}   options={{ animation: 'slide_from_right' }}/>
       <Stack.Screen name="Login" component={Login}   options={{ animation: 'slide_from_right' }}/>
    </>
  );
}
