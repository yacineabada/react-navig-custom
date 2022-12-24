import { View, Text,Image ,StyleSheet,Dimensions} from 'react-native'
import React,{useState,useEffect} from 'react'
import {profile} from '../Constants/Images'
const {height,width}=Dimensions.get('window');

const HeaderID = ({user}) => {

  const {ID}=user
  

  return (
    <View style={styles.container}>
      
          <View style={styles.info}>

            {/*PROFILE PIC*/}
         
              <Image style={styles.profilepic} 
              source={profile} 
              resizeMode='contain'
              />
            {/*ID number*/}
            <View>
            <Text  allowFontScaling={true} 
            style={{color:'grey',fontWeight:"700",marginRight:20}}
            >

            {ID}
            </Text>
            </View>
            
          </View>

    </View>
  )
}

export default HeaderID

const styles = StyleSheet.create({
    container: {
      flex:1,
      height:'100%',
      width:width*0.6,
      backgroundColor:'grey',
      borderRadius:20,
      overflow:'hidden',
    },
    info:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'90%',
      height:'100%',
      backgroundColor:'black',
      borderRadius:20,
        
        
    },
    profilepic:{
        height:20,
        width:20,
        borderRadius:10,
        tintColor:'white',
        margin:5,
        marginLeft:10,
    }
    
    
  
  });