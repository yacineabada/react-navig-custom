import { View, Text } from 'react-native';
import React ,{useEffect,useState}from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import Tabs from './Tabs';
import { AuthNav } from './AuthNav';
import { useAuth } from '../context/AuthProvider'



const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'#272A25',
  },
};


export default function Navigation() {

  const {getUser}=useAuth();
  

  return (
    <NavigationContainer theme={MyTheme}>
      {
        getUser()
        ? <Tabs/> 
        : <AuthNav/>

      }
      
    </NavigationContainer>
  );
}
