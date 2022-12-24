import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

const {width}=Dimensions.get("window");

const Section = ({title,disc}) => {
  return (
      //container
    <View style={styles.container}>
      <View >
        <Text style={styles.Title}>{title} : </Text>
      </View>
      <View >
      <Text style={styles.Title}>{disc}</Text>
      </View>

    </View>
  )
}

export default Section

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
         width:width,
         height:80,
         borderColor:'grey',
         borderBottomWidth:1,
         borderTopWidth:1,

    },
    Title:{
        
        fontFamily:'RobotoCondensed-Regular',
        fontWeight:'700',
        color:'grey',
        padding:10
    
    },
})