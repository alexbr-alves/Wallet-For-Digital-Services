import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Intro from '../screens/intro';
import WelcomeScrenn from '../screens/welcomeScreen';
import Register from '../screens/register1';
import Subscription from '../screens/subscription';
import SubsInfo from '../screens/subsInfo'
import Register2 from '../screens/register2'
import HomeRotas from './homeRotas';

const Stack = createNativeStackNavigator();
export default function AppRotas(){

    return(
        <NavigationContainer >
        <Stack.Navigator initialRouteName='Welcome'>
       
          <Stack.Screen name="Welcome" component={WelcomeScrenn} options={{
            title: '',
            headerShown: false,
            }} />
       
          
            <Stack.Screen name="Intro" component={Intro} options={{
           title: '',
           headerShown: false
            }}/>
          <Stack.Screen name="Register" component={Register} options={{
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="Register2" component={Register2} options={{
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="HomeSubs" component={HomeRotas} options={{
           title: '',
           headerShown: false
            }}/>

          <Stack.Screen name="SubsInfo" component={SubsInfo} options={{
           title: '',
           headerShown: false
            }}/>

<           Stack.Screen name="Subscription" component={Subscription} options={{
           title: '',
           headerShown: false
            }}/>

          
        </Stack.Navigator>
      </NavigationContainer>
    )
          
}