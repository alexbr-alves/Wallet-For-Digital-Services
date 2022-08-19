import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity} from "react-native";
import styles from './styles'
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import apple from '../../../assets/Apple.png'
import Facebook from '../../../assets/Facebook.png'
import Google from '../../../assets/Google.png'
import signUp from '../../../assets/signUp.png'

import logo from '../../../assets/logo.png'
import IconCheck from 'react-native-vector-icons/Fontisto';

export default function Register(){
    const [check, setCheck] = useState(false);
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
         
         <Image style={styles.logo} source={logo}/>
         
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {
                navigation.navigate('HomeSubs')
            }}>
            <Image style={styles.botao__apple} source={apple}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {
                navigation.navigate('HomeSubs')
            }}>
            <Image style={styles.botao__google} source={Google}/>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {
                navigation.navigate('HomeSubs')
            }}>
            <Image style={styles.botao__facebook} source={Facebook}/>
            </TouchableOpacity>

            <Text style={styles.texto1}>or</Text>

            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {navigation.navigate('Register2')}}>
            <Image style={styles.botao__signUp} source={signUp}/>
            </TouchableOpacity>

           <Text style={styles.texto2}>By registering, you agree to our Terms of Use. Learn{'\n'} how we collect, use and share your data.</Text>
            
            
           
        </View>
    )
}