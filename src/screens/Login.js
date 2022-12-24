import { StyleSheet, Text, View,SafeAreaView,Dimensions,TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import InputStyle from '../components/InputStyle'
import { AuthButton } from '../components/AuthButton'



const {width}=Dimensions.get('window')

export const Login = ({navigation}) => {

  const [email,setEmail]=useState('');
  const [Password,setPassword]=useState('');

return (
    <SafeAreaView style={styles.container}>
        
        <View style={{height:100,justifyContent:'flex-end',alignItems:'flex-start',width:width-100}}>
        <Text style={{fontFamily:'Roboto-Regular',fontSize:20,letterSpacing:3,color:'#cdddfb'}}>Connecter vous :</Text>
        </View>

        <View>
        <InputStyle label='Email' setText={setEmail}/>
        <InputStyle label='Mot de pass' isPassword={true} setText={setPassword}  />   
        </View>

        <TouchableOpacity style={{marginTop:50}} onPress={()=>console.log(email,Password)} >
        <AuthButton title='log in'/>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:50}} onPress={()=>navigation.goBack() }>
        <AuthButton title='Go Back'/>
        </TouchableOpacity>

        
        
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
      backgroundColor: '#272A25',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'center'
    }
})