import React, { useEffect, useState } from "react";
import { View, Text, Image,  TouchableOpacity, ScrollView, TextInput} from "react-native";
import styles from './styles'
import { useRoute } from '@react-navigation/native';


import arrowDown from '../../../assets/arrowDown.png'
import arrowUp from '../../../assets/arrowUp.png'
import trash from '../../../assets/trash.png'
import save from '../../../assets/save.png'


export default function SubsInfo(){
    const route = useRoute();
    const [arrow, setArrow] = useState(true);

    
    return(
        <View style={styles.container}>
            <View style={styles.areaSuperior} >
                  <View style={styles.header}>
                    <TouchableOpacity onPress={() =>  setArrow(!arrow)}>
                        <Image style={styles.header__arrowDown} source={ arrow === true? arrowDown : arrowUp}/>
                    </TouchableOpacity>
                    <Text style={styles.header__text}> Subscriptions info</Text>
                    <TouchableOpacity>
                        <Image style={styles} source={trash}/>
                    </TouchableOpacity>
                  </View>
                  <Image style={styles.info__logo} source={route.params.logo}/>
                  <Text  style={styles.info__name}>{route.params.name}</Text>
                  <Text  style={styles.info__price}>{route.params.price}</Text>
            </View>
            { arrow === true ?
            <View style={styles.areaInferior}>
                <View style={styles.details}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.details__item1}>Name</Text>
                        <Text style={styles.details__item2}>{route.params.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.details__item1}>Description</Text>
                        <Text style={styles.details__item2}>{route.params.description}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.details__item1}>Category</Text>
                        <Text style={styles.details__item2}>{route.params.category}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.details__item1}>First Paymant</Text>
                        <Text style={styles.details__item2}>{route.params.firstPay}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.details__item1}>Reminder </Text>
                        <Text style={styles.details__item2}>{route.params.reminder}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.details__item1}>Currency</Text>
                        <Text style={styles.details__item2}>{route.params.currency}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image style={styles.bottom__save} source={save}/>
                </TouchableOpacity>
           </View>
:
null
}
        </View>
    )
}