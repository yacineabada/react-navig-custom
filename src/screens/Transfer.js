import {KeyboardAvoidingView, View, Text,Dimensions , SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import InputStyle from '../components/InputStyle'


const {height,width}=Dimensions.get('window');


export function Transfer() {

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView >

      <View style={styles.transaction}>
        <Text style={styles.transactionTitle}>Envoyer des Points</Text>
        <View style={{marginBottom:20}}>
        <InputStyle label='ID'/>
        <InputStyle label='Sold de point' />
        </View>
        <TouchableOpacity>
          <View style={{
            margin:20,
            width:200,
            height:40,
            backgroundColor:'#4f296e',
            justifyContent:'center',
            borderRadius:20
          }}>
            <Text style={{color:'white',textAlign:'center'}}>Envoyer</Text>
          </View>
        </TouchableOpacity>
      </View>  
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',   
  },
  
  transaction:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:height*0.4,
    width:width*0.8,
    backgroundColor:'#22b573',
    borderRadius:20,
    marginTop:10
  },
  transactionTitle:{

  textAlign:'center',
  fontFamily:'Roboto-Bold',
  fontWeight:"600",
  color:'white',
  fontSize:20,
  padding:10,
  },

  textDisc:{
  paddingRight:20,
  fontFamily:'Roboto-Light',
  fontWeight:"300",
  color:'grey',
  }
  

});