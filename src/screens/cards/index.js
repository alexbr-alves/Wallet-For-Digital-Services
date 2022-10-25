import React, { useEffect, useState } from "react";
import { View, Text, Image,  TouchableOpacity} from "react-native";
import styles from './styles'
import { useNavigation } from "@react-navigation/native";


import settings from '../../../assets/homeSub/settings.png'
import credit from '../../../assets/credit.png'
import add from '../../../assets/budgets/add.png'

import OneDriveLogo from '../../../assets/homeSub/OneDriveLogo.png'
import SpotifyLogo from '../../../assets/homeSub/SpotifyLogo.png'
import yTLgoo from '../../../assets/homeSub/yTLgoo.png'
import netflix from '../../../assets/subscription/netflix.png'

export default function Cards(){
    const navigation =useNavigation();
   
    return(
        <View style={styles.container}>
        <View style={styles.header}>
                <Text style={styles.header__text}>Credit Cards</Text>
                <TouchableOpacity>
                    <Image style={styles.header__icon} source={settings}/>
                </TouchableOpacity>
            </View>
            <Image style={styles.card} source={credit}/>
            <Text style={styles.title}>Subscriptions</Text>
            <View style={styles.icon__row}>

            <Image style={styles.icon} source={SpotifyLogo}/>
            <Image style={styles.icon} source={yTLgoo}/>
            <Image style={styles.icon} source={OneDriveLogo}/>
            <Image style={styles.icon} source={netflix}/>
            </View>
            <TouchableOpacity style={styles.addCard}>
                <Text style={styles.addCard__text}>Add new card</Text>
                <Image source={add} />
            </TouchableOpacity>
        </View>
    )
}