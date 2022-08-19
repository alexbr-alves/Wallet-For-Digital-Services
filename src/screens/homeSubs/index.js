import React, { useState } from "react";
import { View, Text, Image,  TouchableOpacity } from "react-native";
import styles from './styles'

import IconSettings from "../../../assets/homeSub/settings.png";
import IconArco from '../../../assets/homeSub/arco.png'
import IconLogo from '../../../assets/homeSub/logo.png'
import buttonSee from '../../../assets/homeSub/see.png'
import buttonActive from '../../../assets/homeSub/buttonActive.png'
import buttonHighest from '../../../assets/homeSub/buttonHighest.png'
import buttonLowest from '../../../assets/homeSub/buttonLowest.png'
import OneDrive from '../../../assets/homeSub/OneDriveLogo.png'
import Spotify from '../../../assets/homeSub/SpotifyLogo.png'
import YouTube from '../../../assets/homeSub/yTLgoo.png'
import date from '../../../assets/homeSub/date.png'
import { useNavigation } from "@react-navigation/native";


export default function HomeSubs(){
    const [screenL, setScreenL] = useState(true)
    const [screenR, setScreenR] = useState(false)
    const navigation = useNavigation()
   
    return(
        <View style={styles.container}>
            <View style={styles.areaSuperior} >
                    <TouchableOpacity style={{marginRight: 23}}>
                        <Image style={styles.iconSettings} source={IconSettings}/>
                    </TouchableOpacity>
                        <Image style={styles.iconLogo} source={IconLogo}/>
                        <Image style={styles.iconArco} source={IconArco}/>
                    <View >
                        <Text style={styles.arco__value}> $1.235</Text>
                        <Text style={styles.arco__texto}> This month bills</Text>
                        <TouchableOpacity>
                            <Image style={styles.arco__button} source={buttonSee}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.areaButton}>
                            <TouchableOpacity>
                                <Image style={styles.button1} source={buttonActive}/>
                                <Text style={styles.button1__texto}>Active subs</Text>
                                <Text style={styles.button1__number}>12</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.button2} source={buttonHighest} />
                                <Text style={styles.button2__texto}> Highest subs</Text>
                                <Text style={styles.button2__number}>$19.99</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Image style={styles.button3} source={buttonLowest}/>
                            <Text style={styles.button3__texto}>Lowest subs</Text>
                            <Text style={styles.button3__number}>$5.99</Text>
                            </TouchableOpacity>

                    </View>
            </View>
            <View style={styles.tabs}>
                <TouchableOpacity onPress={() => {{setScreenL(true)} {setScreenR(false)}}}>
                <Text style={ screenL === true? styles.tabs__buttonFalse : styles.tabs__buttonTrue}>Your subscriptions</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => {{setScreenR(true)} {setScreenL(false)}}}>
                    <Text  style={ screenR === false? styles.tabs__buttonTrue:styles.tabs__buttonFalse}>Up comming bills</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.itens}>
                <TouchableOpacity style={styles.itens__row} onPress={() => {navigation.navigate('SubsInfo', {
                    logo: Spotify, name: 'Spotify',price: '$5.99', description: 'Music app', category: 'Enterteintment', 
                    firstPay: '08.01.2022', reminder: 'Never', currency: 'USD($)'

                })}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={screenL === true? Spotify : date} style={styles.itens__icon}/>
                    <Text style={styles.itens__name}> Spotify</Text>
                    </View>
                    <Text style={styles.itens__value}>$5.99</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itens__row} onPress={() => {navigation.navigate('SubsInfo', {
                    logo: YouTube, name: 'YouTube Premium',price: '$18.99', description: 'Video app', category: 'Enterteintment', 
                    firstPay: '08.01.2022', reminder: 'Never', currency: 'USD($)'

                })}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={screenL === true? YouTube : date} style={styles.itens__icon}/>
                    <Text style={styles.itens__name}>YouTube Premium</Text>
                    </View>
                    <Text style={styles.itens__value}>$18.99</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itens__row} onPress={() => {navigation.navigate('SubsInfo', {
                    logo: OneDrive, name: 'Microsoft OneDriv',price: '$29.99', description: 'Cloud storage', category: 'Cloud Service', 
                    firstPay: '08.01.2022', reminder: 'Never', currency: 'USD($)'

                })}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={screenL === true? OneDrive : date} style={styles.itens__icon}/>
                    <Text style={styles.itens__name}> Microsoft OneDrive</Text>
                    </View>
                    <Text style={styles.itens__value}>$29.99</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}