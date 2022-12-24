import { StyleSheet, Text, View,SafeAreaView,Dimensions,TouchableOpacity,KeyboardAvoidingView,ScrollView ,Alert} from 'react-native'
import React,{useState} from 'react'
import InputStyle from '../components/InputStyle'
import { AuthButton } from '../components/AuthButton'
import { useAuth } from '../context/AuthProvider'



const {width}=Dimensions.get('window')

export const SignUpFormCompany = ({route}) => {
  const {type}=route.params
  const [form,setform]=useState('');
  const [CompanyName,setCompanyName]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const [confirmpassword,setConfirmpassword]=useState('');

  const {signUp,getUser}=useAuth();

  



  async function handle(){
    const filter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let a = [form,CompanyName,phone,email,Password,confirmpassword];

    let missed=false;
    for (let index = 0; index < a.length; index++) {
      const element = a[index];
      if(element.length==0){
        Alert.alert('error',"s'il vous plaît, remplissez tous les champs.");
        missed=true;
        break
    }}

    if(missed){
      return;
    }  

    if(!filter.test(email)){
      Alert.alert("email non valide","la forme de votre email n'est pas valide,veuillez réessayer.");
      return
    }

    if (Password !== confirmpassword) {
      Alert.alert("Mot de pass",'les mots de passe ne correspondent pas, veuillez réessayer.');
      return;
    }
    
    

  await  signUp(Nom,Prenom,phone,type,email);
    const user = await getUser();
    console.log(user);
  }





return (
    <SafeAreaView style={styles.container}>
        

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
        >
          <KeyboardAvoidingView>
        <View style={{height:100,justifyContent:'flex-end',alignItems:'flex-start',width:width-100}}>
        <Text style={{fontFamily:'Roboto-Regular',fontSize:20,letterSpacing:3,color:'#cdddfb'}}>créer votre compte :</Text>
        </View>

        <View style={{marginLeft:20}}>

        <InputStyle label='Form Juredique ' setText={setform}/>
        <InputStyle label='Nom de société' setText={setCompanyName} />
        <InputStyle label='N° telephone'   setText={setPhone}/>
        <InputStyle label='Email'  setText={setEmail}/> 
        <InputStyle label='Password' isPassword={true} setText={setPassword} />
        <InputStyle label='confirmation Password' isPassword={true} setText={setConfirmpassword}/>

        
        <TouchableOpacity style={{marginTop:50,marginLeft:50}} onPress={handle}>
        <AuthButton title='Sign UP'/>
        </TouchableOpacity>

        </View>

        </KeyboardAvoidingView>
        </ScrollView>
        
        
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container:{
    flex: 1,
      backgroundColor: '#272A25',
      justifyContent:'flex-start',
      alignItems:'center'
    }
})