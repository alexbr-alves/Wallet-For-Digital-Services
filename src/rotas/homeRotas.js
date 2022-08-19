import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeSubs from '../screens/homeSubs';
import tbHome from '../../assets/tbHome.png'

const Tab = createBottomTabNavigator();

export default function HomeRotas() {
  return (
    
      <Tab.Navigator screenOptions={{
        headerShown: false,
        //tabBarActiveBackgroundColor: '#4e4e61',
        
      }}>
        <Tab.Screen name="Home" component={HomeSubs} options={{title: '' }}/>
       
      </Tab.Navigator>
    
  );
}