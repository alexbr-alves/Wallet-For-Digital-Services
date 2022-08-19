import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

import logo from '../../../assets/logo.png'
import signIn from '../../../assets/signIn.png'
import IconCheck from 'react-native-vector-icons/Fontisto';

export default function Intro(){
    const [check, setCheck] = useState(false);
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
         
            <Image style={styles.logo} source={logo}/>

            <View style={styles.login}>
            <Text style={styles.login__texto}>Login</Text>
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

            <View style={styles.check}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => setCheck(!check)}>
                        {check === false? 
                        <IconCheck style={styles.check__icon} size={20} color='#353542' name="checkbox-passive"/>
                    :
                        <IconCheck style={styles.check__icon} size={18} color='#5e00f5' name="checkbox-active"/>
                    }
                        
                        
                    </TouchableOpacity>
                    <Text style={styles.check__texto1}>Remember me</Text>
                </View>
                    <Text style={styles.check__texto2}>Forgot password</Text>
            </View>

            <TouchableOpacity onPress={() => {navigation.navigate('HomeSubs')}}>
               <Image style={styles.buttonSignIn} source={signIn}/>
            </TouchableOpacity>
            <View style={styles.botaoSignUn}>
                <Text style={styles.botaoSignUn__texto1}>If you don't have an account yet?</Text>
                <TouchableOpacity style={styles.botaoSignUn__area} onPress={() => {navigation.navigate('Register')}}>
                    <Text style={styles.botaoSignUn__texto2}>Sing Un</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}