import React, { useEffect, useState } from "react";
import {useNavigation} from '@react-navigation/native';
import { View, Text, Image,  TouchableOpacity, TextInput, ScrollView } from "react-native";
import styles from './styles'

import iconBack from '../../../assets/subscription/Back.png'
import iconHbo from '../../../assets/subscription/hbo.png'
import iconYT from '../../../assets/subscription/yt.png'
import iconNF from '../../../assets/subscription/netflix.png'
import iconSpotify from '../../../assets/subscription/spotify.png'
import iconOneD from '../../../assets/subscription/oneDrive.png'
import iconMinus from '../../../assets/subscription/Minus.png'
import iconPlus from '../../../assets/subscription/Plus.png'
import iconAdd from '../../../assets/subscription/add.png'



export default function Subscription(){
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container}>
            <View style={styles.areaSuperior} >
                <View style={{flexDirection: "row"}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                    <Image style={styles.iconBack} source={iconBack}/>
                </TouchableOpacity>
                <Text style={styles.texoNew}>New</Text>
                </View>
                <Text style={styles.textoAdd}>Add new {'\n'} subscription</Text>
                <ScrollView 
                contentOffset={{x: 255}} horizontal={true}>
                <View style={styles.areaIcones}>
                    <TouchableOpacity>
                    <Image style={styles.imageIcone1} source={iconSpotify}/>
                    </TouchableOpacity>
                    <Text style={styles.textoIcone1}>SPOTiFY</Text>
                </View>

                <View style={styles.areaIcones}>
                   <TouchableOpacity>
                   <Image style={styles.imageIcone2} source={iconHbo}/>
                   </TouchableOpacity>
                    <Text style={styles.textoIcone2}>HBO GO</Text>
                </View>

                <View style={styles.areaIcones}>
                   <TouchableOpacity>
                   <Image style={styles.imageIcone2} source={iconYT}/>
                   </TouchableOpacity>
                    <Text style={styles.textoIcone2}>YOUTUBE PRIME</Text>
                </View>

                <View style={styles.areaIcones}>
                   <TouchableOpacity>
                   <Image style={styles.imageIcone2} source={iconNF}/>
                   </TouchableOpacity>
                    <Text style={styles.textoIcone2}>NETFLIX</Text>
                </View>

                <View  style={styles.areaIcones}>
                    <TouchableOpacity>
                    <Image style={styles.imageIcone3} source={iconOneD}/>
                    </TouchableOpacity>
                    <Text style={styles.textoIcone3}>ONE DRIVE</Text>
                </View>
                </ScrollView>
                
            </View>
            <View>
                <Text style={styles.description__texto}>Description</Text>
                <TextInput
                style={styles.description__input}
                autoCapitalize="none"
               
                 />
                </View>
                <View style={styles.price}>
                <TouchableOpacity>
                <Image source={iconMinus}/>
                </TouchableOpacity>
                <View>
                    <Text style={styles.price__title}>Mothly price</Text>
                    <Text style={styles.price__value}>$5.99</Text>
                    <Text style={styles.price__base}>________________</Text>
                </View>
                <TouchableOpacity>
                <Image source={iconPlus}/>
                </TouchableOpacity>
                </View>
               <TouchableOpacity>
               <Image style={styles.add} source={iconAdd}/>
               </TouchableOpacity>
        </ScrollView>
    )
}