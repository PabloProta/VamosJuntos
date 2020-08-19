import React, { useState, useEffect } from 'react';
import { View, Text,StyleSheet, Alert,TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
  } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '587624451928-d809m26tdd003v9b9dmjk1ieqv4kvln8.apps.googleusercontent.com'
})

export default function BoasVindas({navigation})
{
   // Set an initializing state whilst Firebase connects
   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState();

   // Handle user state changes
   console.log("Usuario =:",user);
  
  function onAuthStateChanged(user) {
      setUser(user);
     if (initializing) setInitializing(false);
     
   }

    async function  SignOut()
   {
      
          auth()
          .signOut()
          .then(() => {
              Alert.alert('Deslogado');
          })
         
      
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setUser(null);
           
        
          setInitializing(true)
   
        

        
   }

   useEffect(() => {
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
     
      return subscriber;


   }, []);

  if(initializing)
  { 
  return(
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919'}}>
        <ActivityIndicator size="large" color="#9E9E9E"/>
    </View>
);
}
  
if(user)
{

    return (
      <View style={styles.container}>
        <View style={styles.viewUser}>
           <Text style={styles.boasvindas}>Boas vindas </Text>
           <Image
         style={styles.tinyLogo}
         source={{
           uri: user.photoURL,
         }}
       />
           <Text style={styles.nameUser}>{user.displayName}</Text>
        </View>
 
        <TouchableOpacity style={styles.SignOut}
        onPress={ SignOut}>
            <Text style={styles.sair}> Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
   
      }else{
        navigation.navigate('Acess');
        return(
          <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919'}}>
              <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
      );
      }
   
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1C1C1C',
      flex: 1,
    
      
    },
    boasvindas: {
      fontFamily: 'BebasNeue-Regular',
      color: 'white',
      fontSize: 40,
    },
    viewUser: {
      marginTop: 20,
      alignItems: 'center',
    
    },
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 100,
    },
    nameUser: {
      marginTop: 10,
      fontSize: 20,
      fontFamily: 'CaviarDreams',
      color: 'white',
    },
    SignOut: {
      top: 350,
      backgroundColor: '#e67e22',
      justifyContent: 'center',
      width: 120,
      marginLeft: 30,
      borderRadius: 17,
    },
    sair: {
      fontFamily: 'CaviarDreams_Bold',
        
      padding:12,
    }
});