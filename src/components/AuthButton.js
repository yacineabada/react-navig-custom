import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const AuthButton=({title})=> 
   (
    <View style={styles.container}>
      <Text style={styles.ttitle}>{title}</Text>
    </View>
  );


const styles = StyleSheet.create({
    container:{
        width:200,
        height:50,
        backgroundColor:'transparent',
        borderRadius:25, 
        borderColor:'white',
        borderWidth:1  
    },
    ttitle:{
        textAlign:'center',
        fontFamily:'Roboto-Black',
        padding:10,
        color:'grey', 
        letterSpacing:2,
        fontSize:20
    }
});