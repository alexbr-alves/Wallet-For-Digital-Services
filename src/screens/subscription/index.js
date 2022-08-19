import React, { useEffect, useState } from "react";
import { View, Text, Image,  TouchableOpacity, ScrollView, TextInput} from "react-native";
import styles from './styles'

import iconBack from '../../../assets/subscription/Back.png'
import iconHbo from '../../../assets/subscription/hbo.png'
import iconSpotify from '../../../assets/subscription/spotify.png'
import iconOneD from '../../../assets/subscription/oneDrive.png'
import iconMinus from '../../../assets/subscription/Minus.png'
import iconPlus from '../../../assets/subscription/Plus.png'
import iconAdd from '../../../assets/subscription/add.png'



export default function Subscription(){
    
    return(
        <View style={styles.container}>
            <View style={styles.areaSuperior} >
                <View style={{flexDirection: "row"}}>
                <TouchableOpacity>
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
                    <Text style={styles.textoIcone1}>HBO GO</Text>
                </View>
                <View style={styles.areaIcones}>
                   <TouchableOpacity>
                   <Image style={styles.imageIcone2} source={iconHbo}/>
                   </TouchableOpacity>
                    <Text style={styles.textoIcone2}>HBO GO</Text>
                </View>
                <View  style={styles.areaIcones}>
                    <TouchableOpacity>
                    <Image style={styles.imageIcone3} source={iconOneD}/>
                    </TouchableOpacity>
                    <Text style={styles.textoIcone3}>HBO GO</Text>
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
                <Image style={styles.add} source={iconAdd}/>
        </View>
    )
}