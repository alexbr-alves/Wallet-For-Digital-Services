import React, { useEffect, useState } from "react";
import { View, Text, Image,  TouchableOpacity, ScrollView} from "react-native";
import styles from './styles'
import { useNavigation } from "@react-navigation/native";


import settings from '../../../assets/homeSub/settings.png'

import OneDriveLogo from '../../../assets/homeSub/OneDriveLogo.png'
import SpotifyLogo from '../../../assets/homeSub/SpotifyLogo.png'
import yTLgoo from '../../../assets/homeSub/yTLgoo.png'

import arrowSmall from '../../../assets/arrowSmall.png'

export default function Calender(){
    const navigation =useNavigation();
   
    return(
        <ScrollView style={styles.container}>
            <View style={styles.areaSup}> 
             <View style={styles.header}>
                <Text style={styles.header__text}>Calendar</Text>
                <TouchableOpacity>
                    <Image style={styles.header__icon} source={settings}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.header__titulo}> Subs {'\n'} Schedule</Text>
            <View style={styles.headerRow}>
                <Text style={styles.header__descrit} >3 subscriptions for today</Text>
                <Text style={styles.header__mes}>January</Text>
            </View>

           <ScrollView style={styles.body} horizontal={true}>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>08</Text>
                <Text style={styles.body__day}>Mo</Text>
            </View>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>09</Text>
                <Text style={styles.body__day}>Tu</Text>
            </View>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>10</Text>
                <Text style={styles.body__day}>We</Text>
            </View>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>11</Text>
                <Text style={styles.body__day}>Th</Text>
            </View>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>12</Text>
                <Text style={styles.body__day}>Fr</Text>
            </View>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>13</Text>
                <Text style={styles.body__day}>Sa</Text>
            </View>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>14</Text>
                <Text style={styles.body__day}>Su</Text>
            </View>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>15</Text>
                <Text style={styles.body__day}>Mo</Text>
            </View>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>16</Text>
                <Text style={styles.body__day}>Tu</Text>
            </View>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>17</Text>
                <Text style={styles.body__day}>We</Text>
            </View>

            <View style={styles.body__card}>
                <Text style={styles.body__number}>18</Text>
                <Text style={styles.body__day}>Th</Text>
            </View>
           </ScrollView>
           </View>
           <View style={styles.body__areaSup}>
            <Text style={styles.body__textSup}>January</Text>
            <Text style={styles.body__textSup}>$24.98</Text>
           </View>

           <View style={styles.body__areaInf}>
            <Text style={styles.body__textInf}>01.08.2022</Text>
            <Text style={styles.body__textInf}>In upcoming bills</Text>
           </View>
           <View style={styles.services}>

            <View style={styles.services__cards}>
                <Image style={styles.services__icon} source={SpotifyLogo}/>
                <Text style={styles.services__name}> Spotify</Text>
                <Text style={styles.services__price}>$5.99</Text>
            </View>

            <View style={styles.services__cards}>
                <Image style={styles.services__icon} source={yTLgoo}/>
                <Text style={styles.services__name}>YouTube Premium </Text>
                <Text style={styles.services__price}>$18.99</Text>
            </View>

            <View style={styles.services__cards}>
                <Image style={styles.services__icon} source={OneDriveLogo}/>
                <Text style={styles.services__name}>OneDrive </Text>
                <Text style={styles.services__price}>$29.99</Text>
            </View>
           </View>
        </ScrollView>
    )
}