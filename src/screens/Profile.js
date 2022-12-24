import { View, Text ,SafeAreaView,Dimensions,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Section from '../components/Section';
import { AuthButton } from '../components/AuthButton';
import { useAuth } from '../context/AuthProvider'

const {width,height}=Dimensions.get('window');
export  function Profile() {

  const {signOut,getUser}=useAuth();

  const user =getUser();



  return (
    <SafeAreaView style={styles.container}>

      {/* profile picture , name and ID*/ }
      <View style={styles.userinfo}>
        <View style={{width:100,height:100,backgroundColor:'blue'}}></View>
        <View style={{marginTop:10}}>
          <Text style={styles.Name}>
          {user.la9ab} {user.name} 
          </Text>
        </View>
               
      </View>
      {/* profile picture , name and ID*/ }
    <View style={{marginTop:10}}>
      <Section title='ID Number' disc={user.ID}/>
      <Section title='email' disc={user.email}/>
      <Section title='Status' disc={user.status}/>
    </View>


    <TouchableOpacity style={{marginTop:30}} onPress={async()=>(await signOut())}>
        <AuthButton title='Log out'/>
     </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1
    ,flexDirection:'column'
    ,alignItems:'center'
    ,margin:5
  },
  userinfo:{
    marginVertical:20,
    width:width,
    height:height*0.2,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',   
  },
  Name:{
  fontFamily:'Roboto-Bold',
  fontWeight:"700",
  color:'white',
  fontSize:20
  }
})