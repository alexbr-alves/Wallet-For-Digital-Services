import React, { useEffect, useState } from "react";
import { View, Text, Image,  TouchableOpacity, ImageBackground} from "react-native";
import styles from './styles'
import { useNavigation } from "@react-navigation/native";


import logo from '../../../assets/logo.png'
import fundo from '../../../assets/welcome/fundo.png'
import buttonGet from '../../../assets/welcome/Button1.png'
import button from '../../../assets/welcome/botao.png'


export default function WelcomeScrenn(){
    const navigation =useNavigation();
   
    return(
        <ImageBackground source={fundo} resizeMode={'cover'} style={styles.container}>
         <Image style={styles.logo} source={logo}/>
         <Text style={styles.texto}>Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna risus.</Text>
         <TouchableOpacity onPress={() => {navigation.navigate('Intro')}} 
         style={{alignItems: 'center'}}>
            <Image style={styles.button1} source={buttonGet}/>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> {navigation.navigate('Register')}} style={{alignItems: 'center'}}>
            <Image style={styles.button2} source={button}/>
         </TouchableOpacity>
            

        </ImageBackground>
    )
}