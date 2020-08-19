import React, { useState,useEffect } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity, Alert,ActivityIndicator,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';


export default function Register({navigation})
{
    const [viewPassword, setViewPassWord] = useState(true);
    const [iconViewPassword, setIconViewPassWord] = useState('eye');
    const [registerUser, setRegisterUser] = useState({
        nomeCompleto: '',
        usuario: '',
        email: '',
        senha: '',
        confirmaSenha: '',
       
    })
    const [check , setCheck] = useState({
        isloading: false,
        campoVazio: false,
    });


    function RegisterSet()
    {
        for( var [key, value] of Object.entries(registerUser))
            {
                if(value == null || value == '')
              {
                  console.log( 'O campo', key, 'esta vazio' )
                 check.campoVazio = true;
              }
              else{
                  check.campoVazio = false;
              }
            }
            if(!check.campoVazio)
            {
                if(registerUser.senha == registerUser.confirmaSenha)
                {
                    auth()
                    .createUserWithEmailAndPassword(registerUser.email,registerUser.senha)
                    .then((res) => {
                        res.user.updateProfile({
                            displayName: registerUser.usuario
                        })
                        Alert.alert('Usuário criado com sucesso');
                        setRegisterUser({
                            nomeCompleto: '',
                            usuario: '',
                            email: '',
                            senha: '',
                            confirmaSenha: '',
                        })
                        setCheck({
                            isloading: false
                        })
                        navigation.navigate('BoasVindas');
                    })
                    .catch((error) => {
                        if(error.code === 'auth/email-already-in-use')
                        {
                            Alert.alert('Email já esta em uso')
                        }
                        if (error.code === 'auth/invalid-email') {
                            Alert.alert('Email inválido');
                          }
                          console.error(error);
                    })
                }
                else{
                  Alert.alert('Senhas diferentes');
                }
                console.log('Usuario',registerUser);
            }
      
       
    }
    function mudarPasswordInput()
    {
        if(viewPassword)
        {
            setIconViewPassWord('eye-slash');
            setViewPassWord(false);
        }
        else
        {
           setIconViewPassWord('eye');
           setViewPassWord(true);
        }
        
    }
    useEffect(() =>{


        return() => {

        }
    },[])

    console.log('Usuario',registerUser);
    if(check.isloading)
    {  <StatusBar hidden={true}/>
        return(
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919'}}>
                <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
        );
    }
  


    return(
        <View style={styles.container}>
              <StatusBar hidden={true}/>
            <View>
            <Text style={styles.Title}>Sign Up</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate('Acess') }>
            <Icon name='arrow-left' size={20} />
            </TouchableOpacity>
            </View>
                <View style={styles.formulario}>
                    <View style={styles.containerTextInputs}>
                    <TextInput placeholder='nome completo' 
                    textContentType={'name'}
                    onChangeText={(nome) =>  registerUser.nomeCompleto = nome}/>
                    <Icon style={styles.iconTextInput} name='user' />
                    </View>
                    <View style={styles.containerTextInputs}>
                    <TextInput placeholder='usuario' 
                    textContentType={'username'}
                    onChangeText={(usuario) => registerUser.usuario = usuario}/>
                    <Icon style={styles.iconTextInput} name='id-card' />
                    </View>
                    <View style={styles.containerTextInputs}>
                    <TextInput placeholder='email' 
                    textContentType={'emailAddress'}
                    onChangeText={(email) =>  registerUser.email = email}/>
                    <Icon style={styles.iconTextInput} name='envelope' />
                    </View>
                    <View style={styles.containerTextInputs}>
                    <TextInput placeholder='senha' 
                    // textContentType={'password'}
                    secureTextEntry={viewPassword}
                    onChangeText={(senha) =>  registerUser.senha = senha }/>
                    <Icon style={styles.iconTextInput} name='lock' />
                    <TouchableOpacity style={styles.botaoViewPass}
                    onPress={mudarPasswordInput}>
                        <Icon name={iconViewPassword} style={styles.iconViewPassword}/>
                    </TouchableOpacity>
                    
                    </View>
                    <View style={styles.containerTextInputs}>
                    <TextInput placeholder='confirmar senha' 
                    // textContentType={'password'}
                    secureTextEntry={true}
                    onChangeText={(confirm) => registerUser.confirmaSenha = confirm}/>
                    <Icon style={styles.iconTextInput} name='lock' />
                    </View>
                </View>
   
   
                <View style={styles.bottomStyle}>
                <TouchableOpacity style={styles.botaoRegister}
                onPress={RegisterSet}>
                    <Text style={styles.TextRegister}>Register</Text>
                </TouchableOpacity>
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        marginHorizontal: 25,
    },
    Title: {
        marginTop: 40,
        fontFamily: 'CaviarDreams_Bold',
        color: '#1C1C1C',
        fontSize: 40,
    },
    formulario: {
        marginTop: 100,
    },
    containerTextInputs:{
        position: 'relative',
        marginLeft: 20,
        marginBottom: 14,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
    },
    iconTextInput: {
        position: 'absolute',
        fontSize: 15,
        top: 17,
        left: -20,

    },
    iconViewPassword: {
        fontSize: 15,
    },
    botaoViewPass: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 20,
        top: 20,
    },
    bottomStyle: {
        flex: 1,
        height: 210,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        
    },
    botaoRegister: {
       marginBottom: 20,
       marginLeft: 20,
       backgroundColor: '#1C1C1C',
       padding: 12,
       borderRadius: 14,
       alignItems: 'center',
       width: 110,
    },
    TextRegister: {
        fontFamily: 'LEMONMILK-Light',
        color: 'white',
        fontSize: 17,
    }
});