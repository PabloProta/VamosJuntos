
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import Home from './Home';
import Acess from './Acess';
import Register from './Register';
import BoasVindas from './BoasVindas';

const Stack = createStackNavigator();



export default function Index()
{
    return(
        <NavigationContainer>
        <Stack.Navigator
        
        screenOptions={{
            cardOverlayEnabled: false,
            gestureEnabled: true,
            header: null,
            gestureDirection: 'horizontal',
            cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
         
        }}
        
        headerMode={'none'}
        
        >
            
            <Stack.Screen  name='Home' component={Home} />
            <Stack.Screen name='Acess' component={Acess}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='BoasVindas' component={BoasVindas}/>
        </Stack.Navigator>
        </NavigationContainer>
    )

}