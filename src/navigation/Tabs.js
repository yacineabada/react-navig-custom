import { Image,View} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,Transfer,Profile } from '../screens';
import { CustomButton } from '../components/TabButton';
import HeaderID from '../components/HeaderID';
import {wallet,send,profile} from '../Constants/Images';
import { useAuth } from '../context/AuthProvider';

const TabNav =createBottomTabNavigator();

export default function Tabs() {

    const {getUser}=useAuth();
    const user=getUser().status;

  return (
    <TabNav.Navigator
    
    screenOptions={{
        tabBarHideOnKeyboard:true,
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
            height:50,
            backgroundColor:'#272A25',
            elevation: 0,   
            borderTopWidth:0.3,
            borderTopColor:'grey',               
                }      
            }
        }
     >
   
        <TabNav.Screen
        name='home'
        component={Home}
        options={{
            headerShown:true,
            headerTransparent:true,
            headerStyle:{
                height:40,
            },
            headerTitleAlign:'center',
            headerTitle:()=>(
                <View style={{
                    height:30
                }}>    
                <HeaderID user={getUser()}/>
                </View>            
            ),
            headerRight:()=>(
                <View style={{
                    height:30
                }}>    
               <Image
                source={send}
                resizeMode='contain' 
                style={{
                    marginRight:20,
                    marginTop:5,
                    height:20,
                    width:20
                }}      
               />
                </View>            
            ),
            
            tabBarIcon:({focused})=>(
                <Image
                source={wallet}
                style={{
                    width:20,
                    height:20,
                    tintColor:focused ? 'white' : 'grey'                   
                }} 
                />
            ),
            tabBarButton:(props)=>(
                <CustomButton {...props}/>
            )
        }}

        />

        { getUser().status === 'confirmed' ? 
        
        <TabNav.Screen
        name='transfer'
        component={Transfer}
        options={{
            headerShown:true,
            
            headerStyle:{
                height:50,
                backgroundColor:'#333030'
                ,borderBottomRightRadius:20
                ,borderBottomLeftRadius:20
            },
            headerTitleAlign:'center',
            headerTitleStyle:{
                color:'white'
            },
            tabBarIcon:({focused})=>(
                <Image
                source={send}
                style={{
                    width:20,
                    height:20,
                    tintColor:focused ? 'white' : 'grey'                   
                }}
                
                />
            ),
            tabBarButton:(props)=>(
                <CustomButton {...props}/>
            )
        }}
        />
    
        : null }
         

        <TabNav.Screen
        name='Profile'
        component={Profile}
        options={{
            headerShown:true,
            headerTitleAlign:'center',
            headerStyle:{
                height:50,
                backgroundColor:'#333030'
                ,borderBottomRightRadius:20
                ,borderBottomLeftRadius:20
            },
            headerTitleStyle:{
                color:'white'
            },
            tabBarIcon:({focused})=>(
                <Image
                source={profile}
                style={{
                    width:20,
                    height:20,
                    tintColor:focused ? 'white' : 'grey'                   
                }}
                />
            ),
            tabBarButton:(props)=>(
                <CustomButton {...props}/>
            )
        }}
        />
       
    </TabNav.Navigator>
  )
}
