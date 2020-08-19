import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Easing,StyleSheet, SafeAreaView,TouchableOpacity
, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Lottie from 'lottie-react-native';
import home from '../home.json';


export default function Home( {navigation} )
{
    const progress = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.timing(progress,{

                toValue: 1,
                duration: 3500,
                easing: Easing.linear,
                useNativeDriver: true,

            })).start();

        return () => {
            
        }
    })

    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <SafeAreaView style={{flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
            <Lottie source={home} progress={progress}
            autoSize
            resizeMode={'contain'} />
            </SafeAreaView>
            <View style={styles.postContainer}>
                <View style={styles.span}>
                    <Text style={styles.subTitle}>todos fazem sua parte</Text>
                    <Text style={styles.titulo}>Compartilhe as tarefas</Text>
                </View>
                <View style={styles.comecar}>
                <TouchableOpacity style={styles.botaoNow} 
                onPress={()=> navigation.navigate('Acess')}>
                <Icon style={styles.Icon} name="long-arrow-alt-right" size={25} />
                <Text style={styles.textButton}>COMEÇAR</Text>
                </TouchableOpacity>
                
              
                </View>
            </View>
            
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C'
    },
    postContainer: {
       
        flex: 1,
    },
    span: {
        flex: 1,
        marginTop: 20,
        top: 23,
        marginHorizontal: 20,
        alignItems: 'center',
        width: '90%',
    },
    comecar: {
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
       
    },
    botaoNow: {
        backgroundColor: '#e67e22',
        justifyContent: 'center',
        width: 200,
        borderRadius: 17,
        
    },
    Icon :{
        color: '#1C1C1C',
        position: 'absolute',
        left: 150,
        
    },
    textButton: {
        fontFamily: 'CaviarDreams_Bold',
        
        padding:12,
        
    },
    titulo: {
        fontFamily: 'BebasNeue-Regular',
        color: 'white',
        fontSize: 40,
    },
    subTitle: {
      
        fontFamily: 'LEMONMILK-Light',
        color: 'white',
    },

  
});