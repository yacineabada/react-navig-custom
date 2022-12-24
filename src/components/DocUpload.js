import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'



const DocUpload = ({title,uploaded}) => {
  return (
    <View style={styles.container}>
     <Text  style={styles.title}>Confirmer</Text>
    </View>
  )
}

export default DocUpload

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'60%',
    height:60,
    backgroundColor:'#5572F5',
    borderRadius:15,
    margin:20,
    marginTop:30
  },
  title:{
    textAlign:'center',
    fontSize:15,
    fontFamily:'Roboto-Bold',
    color:'white'
  }
})