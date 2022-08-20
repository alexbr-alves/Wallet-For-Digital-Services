import React, { useEffect, useState } from "react";
import { View, Text, Image,  TouchableOpacity, ImageBackground} from "react-native";
import styles from './styles'
import { useNavigation } from "@react-navigation/native";

import settings from '../../../assets/homeSub/settings.png'
import arco from '../../../assets/budgets/arco.png'
import auto from '../../../assets/budgets/auto.png'
import Entertainment from '../../../assets/budgets/Entertainment.png'
import Security from '../../../assets/budgets/Security.png'
import bar1 from '../../../assets/budgets/bar1.png'
import bar2 from '../../../assets/budgets/bar2.png'
import bar3 from '../../../assets/budgets/bar3.png'
import add from '../../../assets/budgets/add.png'

export default function Budgets(){
    const navigation =useNavigation();
   
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header__text}>{`Spending & Budgets`}</Text>
                <TouchableOpacity>
                    <Image style={styles.header__icon} source={settings}/>
                </TouchableOpacity>
            </View>
            <View style={styles.arco}>
            <Image style={styles.arco__image} source={arco}/>
            <Text style={styles.arco__text1}>$82,97</Text>
            <Text style={styles.arco__text2}>of $2,000 budgets</Text>
            <Text style={styles.arco__text3}>Your budgets are on track</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.body__collumn}>
                    <View style={styles.body__row}>
                        <Image style={styles.body__icon} source={auto}/>
                        <View style={styles.body__rowSup}>
                            <Text style={styles.body__textSup1}>{`Auto & Transport`}</Text>
                            <Text style={styles.body__textInf}>$375 left to spend</Text>
                        </View>
                        <View style={styles.body__rowInf}>
                        <Text style={styles.body__textSup2}>$25.99</Text>
                        <Text style={styles.body__textInf}> of $400</Text>
                        </View>
                    </View>
                    <Image style={styles.body__bar} source={bar1}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.body__collumn}>
                    <View style={styles.body__row}>
                        <Image style={styles.body__icon} source={Entertainment}/>
                        <View style={styles.body__rowSup}>
                            <Text style={styles.body__textSup1}>Entertainment</Text>
                            <Text style={styles.body__textInf}>$375 left to spend</Text>
                        </View>
                        <View style={styles.body__rowInf}>
                        <Text style={styles.body__textSup2}>$50.99</Text>
                        <Text style={styles.body__textInf}>of $600</Text>
                        </View>
                    </View>
                    <Image style={styles.body__bar} source={bar2}/>

                </TouchableOpacity>

                <TouchableOpacity style={styles.body__collumn}>
                    <View style={styles.body__row}>
                        <Image style={styles.body__icon}source={Security} />
                        <View style={styles.body__rowSup}>
                            <Text style={styles.body__textSup1}>Security</Text>
                            <Text style={styles.body__textInf}>$375 left to spend</Text>
                        </View>
                        <View style={styles.body__rowInf}>
                        <Text style={styles.body__textSup2}>$5.99</Text>
                        <Text style={styles.body__textInf}>of $600</Text>
                        </View>
                      
                    </View>
                    <Image style={styles.body__bar} source={bar3}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.body__add}>
                    <Text style={styles.body__addText}> Add new category </Text>
                    <Image style={styles.arco__addImage} source={add}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}