import React, { Component,useState } from 'react';
import { View, Text,TextInput, Button } from 'react-native';

export default function({password})
{
    
 

    return(
        <View>
            <Text>
                Email
            </Text>
            <TextInput placeholder={'Email'}
            />
            <Text>
                Senha
            </Text>

            <TextInput placeholder={'Senha'}
             secureTextEntry={password}
            />
        </View>
    )
}
