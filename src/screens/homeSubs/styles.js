import { StyleSheet, Platform } from "react-native"; 

export default StyleSheet.create({
    container: {
        backgroundColor: '#1c1c23',
        flex: 1,
       
    },
    areaSuperior: {
    backgroundColor: '#292932',
    height: 449,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    },
    iconSettings: {
        alignSelf: 'flex-end',
        marginTop: 40,
        position: 'absolute'
    },
    iconArco: {
        position: 'absolute',
        marginTop: 59,
        alignSelf: 'center'
    },
    iconLogo: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 153
    },
    arco__value: {
        marginTop: 196,
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 40,
        color: '#ffffff'
    },
    arco__texto:{
        alignSelf: 'center',
        marginTop: 16,
        color: '#83839c',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,
    },
    arco__button: {
        alignSelf: 'center',
        marginTop: 29,
    },
    areaButton:{
        flexDirection: 'row', 
        marginHorizontal: 30, 
        marginTop: 36,
        justifyContent:'space-between'

    },
    button1: {
        marginRight:10
    },
    button2: {
        marginRight:10
    },
    button3: {
        marginRight:10
    },
    button1__texto: {
        position: 'absolute',
        marginTop: 16,
        marginLeft: 16,
        color: '#83839c',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16
    },
    button2__texto: {
        position: 'absolute',
        marginTop: 16,
        marginLeft: 16,
        color: '#83839c',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16
    },
    button3__texto: {
        position: 'absolute',
        marginTop: 16,
        marginLeft: 16,
        color: '#83839c',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16
    },
    button1__number: {
        position: 'absolute',
        marginTop: 32,
        marginLeft: 43,
        fontWeight: '600',
        fontSize: 14,
        color: '#ffffff'
    },
    button2__number: {
        position: 'absolute',
        marginTop: 32,
        marginLeft: 33,
        fontWeight: '600',
        fontSize: 14,
        color: '#ffffff'
    },
    button3__number: {
        position: 'absolute',
        marginTop: 32,
        marginLeft: 33,
        fontWeight: '600',
        fontSize: 14,
        color: '#ffffff'
    },
    tabs: {
        marginHorizontal: 24,
        flexDirection: 'row',
        backgroundColor: '#0e0e12',
        height: 50,
        marginTop: 21,
        borderRadius: 50
    },
    tabs__buttonTrue: {
        color: '#ffffff',
        backgroundColor: '#1c1c23',
        textAlign: 'center',
        marginTop: 7,
        marginLeft:9,
        padding: 10,
        borderRadius: 20,
        width: 155,
        fontSize: 12, 
        fontWeight: '600',
        lineHeight: 16,
        letterSpacing: 0.2,
        borderWidth: 0.5,
        borderColor: '#1b1b22'
    },
    tabs__buttonFalse: {
        color: '#a2a2b5',
        textAlign: 'center',
        marginTop: 7,
        marginLeft:9,
        padding: 10,
        borderRadius: 20,
        width: 155,
        fontSize: 12, 
        fontWeight: '600',
        lineHeight: 16,
        letterSpacing: 0.2,
        borderWidth: 0.5,
        borderColor: '#1b1b22'
    },
    itens: {
        marginHorizontal: 24,
        marginTop: 8,   
        paddingBottom: 100
    },
    itens__row: {
        flexDirection: 'row',
        borderWidth: 1,
        height: 64,
        marginTop: 8,
        alignItems: 'center',
        borderRadius: 20,
        borderColor: '#424251',
        justifyContent: 'space-between'
    },
    itens__icon: {
        marginLeft: 12,
        height: 40,
        width: 40,

       
    },
    itens__name: {
        marginLeft: 12,
        fontWeight: '600',
        color: '#ffffff',
        fontSize: 14,
        lineHeight: 20, 
       
       
    },
    itens__value: {
       marginRight: 17,
       fontWeight: '600',
       fontSize: 14,
       lineHeight: 20,
       color: '#ffffff',
       
    },
}) 