import { StyleSheet, Text, View,Dimensions ,ImageBackground, SafeAreaView} from 'react-native'
import React from 'react'

const {width,height}= Dimensions.get('window');



export const Usercards = ({title,disc,bc,img,margl}) => {
  return (

   <ImageBackground source={img} style={{...styles.container , backgroundColor:bc}} resizeMode='contain' imageStyle={{opacity:0.5,marginLeft:margl,marginTop:30}}>

        <View style={{paddingLeft:5,marginTop:10}}>
             <Text style={styles.title}>{title}</Text>
         </View>

         <View style={{paddingRight:'30%', paddingLeft:5,marginTop:10}}>
             <Text style={{fontSize:15,fontWeight:'100',lineHeight:20, color:'#e5e8e3',fontFamily:'Roboto-Regular'}}>{disc}</Text>
         </View>

    </ImageBackground>

  )
}



const styles = StyleSheet.create({

container:{

    width:width*0.7,
    height:height/5,
    marginBottom:20,
    borderRadius:10,
    flexDirection:'column',
    overflow:'hidden',
    
    
},
title:{
    fontSize:20,
    letterSpacing:1,
    fontWeight:'bold',
    paddingHorizontal:5,
    color:'#272A25',
    fontFamily:'Roboto-Bold',
},













// cardcontainer:{
//     flexDirection:'column',
//     justifyContent:'flex-start',
//     alignItems:'flex-start',
//     width:width-80,
//     height:150,
//     borderRadius:10,
//     overflow:'hidden',
//     marginBottom:20
    
// },
// imagecontainer:{
// position:'absolute',
// zIndex:1,
// bottom:15,
// left:'50%',
// width:width-200,
// height:'50%',

// flexDirection:'column',
// justifyContent:'center',
// alignItems:'center'
// },
// image:{
//     padding:100
// },

// title:{
//     fontSize:18,
//     letterSpacing:1,
//     fontWeight:'bold',
//     paddingHorizontal:5,
//     color:'#272A25',
// },

 })