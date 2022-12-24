import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login,Landing,SignUpForm, SignUpFormCompany } from '../screens';


const AuthStack = createNativeStackNavigator();

export const AuthNav = () => {




  return (
    <AuthStack.Navigator>
        <AuthStack.Screen 
        name='Landing'
        component={Landing}
        options={{
            headerShown:false

        }}
        
        />

        <AuthStack.Screen 
        name='Login'
        component={Login}
        options={{
            headerShown:false
        }}

        />

      <AuthStack.Screen 
        name='Signup'
        component={SignUpForm}
        options={{
            headerShown:false
        }}

        
      />
      <AuthStack.Screen 
        name='SignupC'
        component={SignUpFormCompany}
        options={{
            headerShown:false
        }}

        
      />

    </AuthStack.Navigator>
  )
}

