import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

import logo from '../../../assets/logo.png'
import get from '../../../assets/get.png'
import IconCheck from 'react-native-vector-icons/Fontisto';

export default function Register2(){
    const [check, setCheck] = useState(false);
    const navigation =useNavigation();

    return(
        <View style={styles.container}>
         
            <Image style={styles.logo} source={logo}/>

            <View style={styles.login}>
            <Text style={styles.login__texto}>E-mail address</Text>
            <TextInput
                style={styles.login__input}
                autoCapitalize="none"
               
                 />
            </View>
            <View style={styles.password}>
            <Text style={styles.password__texto}>Password</Text>
            <TextInput
                style={styles.password__input}
                autoCapitalize="none"
                 />
            </View>

            <View style={styles.checkPassword}>
                <Text style={styles.checkPassword__text}>Use 8 or more characters with a mix of letters, numbers and symbols.</Text>
            </View>

            <TouchableOpacity onPress={() => {navigation.navigate('HomeSubs')}}>
            <Image style={styles.buttomGet} source={get}/>
            </TouchableOpacity>
            <View style={styles.botaoSignUn}>
                <Text style={styles.botaoSignUn__texto1}>Do you have already an acoount?</Text>
                <TouchableOpacity style={styles.botaoSignUn__area} onPress={() => {navigation.navigate('Intro')}}>
                    <Text style={styles.botaoSignUn__texto2}>Sing In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}