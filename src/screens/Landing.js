import {StyleSheet, View, Text, Image ,TouchableOpacity ,
   ScrollView,
   SafeAreaView} from 'react-native';
import React from 'react';
import { Usercards } from '../components/UserTypeCard';
import {AuthButton} from '../components/AuthButton';
import {logo,company,indiv} from '../Constants/Images';



export  function Landing({navigation}) {


  const endesc ='Interact with your clients and build the trust bridge with our Kash points';
 const handlepress =(a)=>{
   if(a=="c"){
    navigation.navigate('SignupC',{type:a});
   }else{ 
    navigation.navigate('Signup',{type:a});
   }
   
 } 
  return (
  
    <SafeAreaView style={styles.container}>
     <View style={{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,

      }}>
        <View>
        <Text style={{
      fontFamily:'Roboto-Black',
      marginTop:20,
      color:'white',
      fontSize:30,
      letterSpacing:1
    }}>
        Bienvenue sur
        </Text>
        </View>
        
        <View style={{
          marginTop:15,
        }}>
        <Image
        source={logo}
        style={{
          width:100,
          height:100,
        }}
        resizeMode='contain'
        />
        </View>
      </View>



       <View style={{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,

      }}>

        <View style={{marginBottom:20,alignSelf:'flex-start',marginLeft:25}}><Text style={{fontFamily:'Roboto-Regular',fontSize:15,letterSpacing:3,color:'#cdddfb'}}>-Vous etes :</Text></View>
      <TouchableOpacity onPress={()=>(handlepress("c"))}>
      <Usercards title='ENTREPRISE' disc={endesc} bc='#ed4350' img={company} margl={75}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>(handlepress('P'))}>
      <Usercards title='PARTICULIER' disc={endesc} bc='#22b573' img={indiv} margl={85}/>
      </TouchableOpacity>
      <View style={{marginBottom:15,alignSelf:'flex-start',marginLeft:25}}><Text style={{fontFamily:'Roboto-Regular',fontSize:15,letterSpacing:3,color:'#cdddfb'}}>-Vous Avez un compte Deja ?</Text></View>
      </View>

      <View style={{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

      }}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
         <AuthButton title='Log in'/>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#272A25',
      
    },
    Title:{
      fontFamily:'Roboto-Black',
      marginTop:20,
      color:'white',
      fontSize:30,
      letterSpacing:1
    },
    
  });
  
