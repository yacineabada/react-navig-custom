import { View, Text, StyleSheet ,Dimensions,SafeAreaView} from 'react-native'
import React from 'react'
import DocUpload from '../components/DocUpload';

const {height,width}=Dimensions.get('window');


export  function Home() {

  const user={
    type:'person',
    name:'yacine',
    la9ab:'abada',
    ID:'234628',
    points:200,
    email:'yacine1287@gmail.com',
    status:'not confirmed',
    docsupload:false
    
};
 


  return (
    <SafeAreaView>
    <View style={styles.container}>


      <View style={{...styles.points,
        backgroundColor:user.status=='confirmed'?'#22b573':'#ed4350'}}
      >

        <View>
          <Text style={{fontFamily:'Roboto-Light',fontWeight:'700'}}>Status: {user.status}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:60}}>+ {user.points}</Text>
          <Text style={{fontSize:20,color:'#272A25',alignSelf:'flex-end'}}>K</Text>
          <Text style={{fontSize:17,color:'#272A25',alignSelf:'flex-end'}}>P</Text>
        </View>
      


      </View>



        <View style={styles.transaction}>
          {user.status=='not confirmed' &&
          <>
          <View style={{margin:20}}>
            <Text  style={styles.transactionTitle}>
              Confirmer votre compte
              </Text>            
          </View>   

          <View style={{marginLeft:10}}>
            <Text adjustsFontSizeToFit={true}  style={styles.textDisc}>
                -For security reasons and In order to Register, we will need you to
                 upload the following documents 
              </Text>            
          </View>


            <DocUpload title="Piece D'identité"  uploaded={user.docsupload} />

          </>     
          }


        </View>
    </View>
    </SafeAreaView>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'flex-start',   
  },
  points:{
    height:height*0.3,
    width:width,
    backgroundColor:'#ed4350',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  transaction:{
    flexDirection:'column',
    alignItems:'center',
    height:height*0.8,
    width:width*0.8,
    backgroundColor:'#303136',
    borderRadius:20,
    marginTop:10
  },
  transactionTitle:{

  textAlign:'center',
  fontFamily:'Roboto-Bold',
  fontWeight:"600",
  color:'white',
  fontSize:20
  },

  textDisc:{
  paddingRight:20,
  fontFamily:'Roboto-Light',
  fontWeight:"300",
  color:'grey',
  }
  

});