import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Image, View, Text, TouchableOpacity, Platform } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

import Home from '../screens/home';
import Subscription from '../screens/subscription'
import Cards from '../screens/cards';
import add from '../../assets/add.png'

const Tab = createBottomTabNavigator();

export default function HomeRotas() {
 
  return (
    
      <Tab.Navigator  screenOptions={({route}) => ({
        headerShown: false,
        tabBarInactiveTintColor: '#666680',
        tabBarActiveTintColor: '#ffffff',
          tabBarStyle: {
          position: 'absolute',
          left: Platform.OS === "ios"? 0 : 10,
          right: Platform.OS === "ios"? 0 : 10,
          elevation: 0,
          borderRadius: 20,         
          backgroundColor: '#3e3e4d',
        },
      })}
        
      >
        <Tab.Screen name="Home" component={Home}  options={{title: '' , tabBarIcon: ({size, color }) => (
          <Ionic name='home-outline' size={size} color={color}/>
        ), tabBarIconStyle: {marginTop: 10}}}/>

        

        <Tab.Screen name="Subscription" component={Subscription}  options={{title: '', tabBarStyle: {display: 'none'}, tabBarIcon: ({size, color }) => (
         <ButtomAdd />
        )}}/>
        
      

        <Tab.Screen name="Cards" component={Cards} options={{title: '', tabBarIcon: ({size, color }) => (
          <Ionic name='card-outline' size={size} color={color}/>
        ), tabBarIconStyle: {marginTop: 10} }}/>

      </Tab.Navigator>
    
  );
}

function ButtomAdd(){
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={() => navigation.navigate('Subscription')}>
      <Image  source={add}/>
    </TouchableOpacity>
  )
}