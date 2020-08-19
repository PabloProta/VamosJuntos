import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Easing,StyleSheet, SafeAreaView,TouchableOpacity
, StatusBar, TextInput, Alert,ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import Lottie from 'lottie-react-native';
import home from '../home.json';
import { ScrollView } from 'react-native-gesture-handler';
import { GoogleSignin,statusCodes, GoogleSigninButton } from '@react-native-community/google-signin';

GoogleSignin.configure({
    webClientId: '587624451928-d809m26tdd003v9b9dmjk1ieqv4kvln8.apps.googleusercontent.com'
});

export default function Acess( {navigation} )
{
   
    const progress = new Animated.Value(0);
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [sign, setSign] = useState({
        email: '',
        senha: ''
    })

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }


      async function onGoogleButtonPress() {
        try {
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
          } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
              console.log(error);
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
              console.log(error);
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
              console.log(error);
            } else {
              // some other error happened
              console.log(error);
            }
          }
      }

    useEffect(() => {
      
        Animated.loop(
            Animated.timing(progress,{

                toValue: 1,
                duration: 3500,
                easing: Easing.linear,
                useNativeDriver: true,

            })).start();

            const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
            return subscriber; 

    },[progress])
    
    function Sign()
    {
        if(sign.email == null || sign.email == '' || sign.senha == null || sign.senha == '')
        {
                Alert.alert('Preencha todos os campos');
        }
        else
        {
            auth()
            .signInWithEmailAndPassword(sign.email,sign.senha)
            .then(() => {
                Alert.alert('logado com sucesso');
            })
            .catch((err) =>{
                if(err.code == 'auth/invalid-email')
                {
                    Alert.alert('Email Inválido');
                
                }
                if(err.code == 'auth/user-not-found')
                {
                    Alert.alert('Usuário não encontrado');
                }
                if(err.code == 'auth/wrong-password')
                {
                    Alert.alert('Senha incorreta')
                }
                // console.error(err); só quando quiser mostrar qual erro que foi.
            })
        }
       
       
    }

    if(initializing)
    {
        return(
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919'}}>
                <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
        )
    }
 
    
       if(!user)
       {
        return(
       

     
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <SafeAreaView style={{flex: 1/1.5 , justifyContent: 'center' , alignItems: 'center', top: 10,}}>
                <Lottie source={home} progress={progress}
                autoSize
                resizeMode={'contain'} />
                </SafeAreaView>
             
                <View style={styles.Acess}>
                    <Text style={styles.Sign}>Sign In</Text>
                   <TouchableOpacity style={styles.registrar}
                   onPress={() => navigation.navigate('Register')}>
                   <Text style={styles.SingUp}>SIGN UP</Text>
                   </TouchableOpacity>
                
                    <ScrollView >
    
                    
                
           
                    <View style={styles.Input}>
                        <View style={styles.Text1}>
                            <TextInput style={styles.input1} placeholder='Email adress' 
                            placeholderTextColor='#C0C0C0'
                            onChangeText={(email) => sign.email = email}
                            ></TextInput>
                            <Icon style={styles.icones}   name={'at'} color={'#e67e22'} size={20}/>
                        </View>
                  
                    <View style={styles.Text2}>
                        <TextInput style={styles.input1} placeholder='Password' 
                        placeholderTextColor='#C0C0C0'
                        secureTextEntry={true}
                        onChangeText={(senha) => sign.senha = senha}
                        ></TextInput>
                         <Icon style={styles.icones}   name={'unlock'} color={'#e67e22'} size={20}/>
                    </View>
                </View>  
                
                   
                  
              
                    </ScrollView>  
                </View>
                <View style={styles.Login}>
                        <TouchableOpacity style={styles.icon1}>
                            <Icon   name={'facebook'} color={'#C0C0C0'} size={26}/>    
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.icon2}
                        onPress={onGoogleButtonPress}
                        >
                            <Icon    name={'google'} color={'#C0C0C0'} size={26}/>    
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon3}
                        onPress={Sign}>
                            <View style={styles.prossiga} >
                            <Icon  name={'arrow-right'} color={'#1C1C1C'} size={26}/>
                            </View>
                               
                        </TouchableOpacity>
                        
                    </View>
            </View>
        
        )
       }else{
           navigation.navigate('BoasVindas')
           return(
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919'}}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
           )
       }
    
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C'
    },
  Acess: {
      flex: 2,
      alignContent: 'center',
      alignItems: 'center',
  },
  Sign: {
      color: 'white',
      marginTop: 40,
      fontSize: 60,
      fontFamily: 'BebasNeue-Regular',
      letterSpacing: 5,
  },
  SingUp: {
      color:'#e67e22',
      opacity: 0.7,
      fontFamily: 'LEMONMILK-Regular',
  },
  Input: {
      marginHorizontal: 10,
      marginTop: 82,
      width: '100%',
      
  },
  input1: {
      position: 'relative',
      fontSize: 16,
    
      fontFamily: 'CaviarDreams',
     
      color: 'white',
      opacity: 0.5,
      width: 300,
      borderBottomColor: '#C0C0C0',
      borderBottomWidth: 0.3,
      paddingBottom: 16,
    
      
  },
  Text1: {
      position: 'relative',
      marginLeft: 30,
      marginBottom: 34,
  },
  Text2: {
    position: 'relative',
    marginLeft: 30,
},
icones: {
    position: 'absolute',
    marginTop: 15,
    left: -26,
    opacity: 0.6,
},  
  Login: {
      marginVertical: 20,
        alignItems: 'baseline',
      marginHorizontal: 30,
     flex: 1/3,
  },
  icon1: {
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 100,
    width: 50,
    height: 50,
    opacity: 0.7, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    borderColor: 'white',
    borderWidth: 0.5,
    position: 'absolute',
    marginLeft: 73,
    borderRadius: 100,
    width: 50,
    height: 50,
    opacity: 0.7, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon3: {
    position: 'absolute',
    
    alignSelf: 'flex-end',
  },
  registrar: {
      position: 'relative',
      marginLeft: 280,
      top: -26,
    
  },
  prossiga: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e67e22',
    borderWidth: 0.5,
    width: 70,
    height: 50, 
    opacity: 0.7,
  }

  
});