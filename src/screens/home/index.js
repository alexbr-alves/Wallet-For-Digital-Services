import React, { useState } from "react";
import { View, Text, Image,  TouchableOpacity , ScrollView} from "react-native";
import styles from './styles'


import { useNavigation } from "@react-navigation/native";


export default function Home(){
    const [screenL, setScreenL] = useState(true)
    const [screenR, setScreenR] = useState(false)
    const navigation = useNavigation()
   
    return(
        <ScrollView style={styles.container}>
            
            
        </ScrollView>
    )
}