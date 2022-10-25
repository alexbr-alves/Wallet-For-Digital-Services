import React, { useEffect, useState } from "react";
import {useNavigation} from '@react-navigation/native';
import { View, Text, Image,  TouchableOpacity, FlatList, Modal} from "react-native";
import {Snackbar} from 'react-native-paper';
import styles from './styles';

import iconBack from '../../../assets/subscription/Back.png';
import Info from 'react-native-vector-icons/AntDesign';
import Close from 'react-native-vector-icons/AntDesign';
import contas from "../../mocks/contas";



export default function Subscription(){
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [ativo, setAtivo] = useState(true);
    const [passivo, setPassivo] = useState(false);
    const [pLiquido, setPLiquido] = useState(false);
    const [credito, setCredito] = useState(0);
    const [debito, setDebito] = useState(0);
    const [statusCredito, setStatusCredito] = useState(false);
    const [statusDebito, setStatusDebito] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    

    useEffect(() => {
       setData(contas[0]) 
    }, [])
    
    function operacao(){
        if(statusCredito == false && statusDebito == false){
          setAlertVisible(true)
        }else{
            setModalVisible(true)
        }
    };

    function FecharModal(){
        setModalVisible(false);
        setStatusCredito(false);
        setStatusDebito(false);
    }
    
    return(
        <View style={styles.container}>
            
            <View>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                    <Image style={styles.iconBack} source={iconBack}/>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <TouchableOpacity style={ativo === true? styles.headerActive: styles.headerInactive} onPress={() => {
                    {setAtivo(true)} {setPassivo(false)} { setPLiquido(false)} {setData(contas[0])}} 
                    }>
                    <Text style={ativo === true ? styles.header__textActive: styles.header__textInactive}>Ativo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={passivo === true? styles.headerActive: styles.headerInactive}  onPress={() => {
                     {setAtivo(false)} {setPassivo(true)} { setPLiquido(false)} {setData(contas[1])}}
                }>
                    <Text style={passivo === true? styles.header__textActive : styles.header__textInactive}>Passivo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={pLiquido === true? styles.headerActive: styles.headerInactive}  onPress={() => {
                    {setAtivo(false)} {setPassivo(false)} { setPLiquido(true)} {setData(contas[2])}}
                }>
                    <Text style={pLiquido === true? styles.header__textActive : styles.header__textInactive}>P. Liquido</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                data={data}
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                
                    <View style={styles.body}>
                        <TouchableOpacity style={styles.bodyItem} onPress={() => {operacao()}}>
                            <Text style={styles.body__text}>{item.nome}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.body__icon}>
                            <Info name="infocirlce" color={'gray'} size={25}/>
                        </TouchableOpacity>
                        <Modal
                            style={styles.modal}
                            animationType={'slide'}
                            visible={modalVisible}
                            >
                            <TouchableOpacity style={styles.modal__AreaIcone} onPress={() => {FecharModal()}}>
                                <Close name="closecircle" size={25}/>
                            </TouchableOpacity>

                        </Modal>
                    </View>
                    
                  
                )}
                ListFooterComponent={
                    <View style={{height: 300}}></View>
                }
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={statusDebito === true? styles.footerAtivo__on: styles.footerAtivo} onPress={() => {
                    {if(statusDebito == true){setStatusDebito(false)} else{setStatusDebito(true),setStatusCredito(false)}}
                }}>
                    <Text style={styles.footer__text}>Credito</Text>
                    <Text style={styles.footer__value}>{credito}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={statusCredito === true? styles.footerPassivo__on : styles.footerPassivo} onPress={() => {
                    {if(statusCredito == true){setStatusCredito(false)} else {setStatusDebito(false), setStatusCredito(true)}}
                }}>
                    <Text style={styles.footer__text}>Debito</Text>
                    <Text style={styles.footer__value}>{debito}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerFinalizar}>
                    <Text style={styles.footer__finalizar}>Finalizar</Text>
                </TouchableOpacity>

                <Snackbar
                visible={alertVisible}
                onDismiss={() => setAlertVisible(false)}
                duration={5000}
                action={{
                    label: "OK",
                    onPress: () => setAlertVisible(false)
                }}
                >
                    "Selecione Credito ou Debito"
                </Snackbar>

               
            </View>
        </View>
    )
}