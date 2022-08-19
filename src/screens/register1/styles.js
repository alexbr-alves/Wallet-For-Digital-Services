import { StyleSheet } from "react-native"; 

export default StyleSheet.create({
    container: {
        backgroundColor: '#1c1c23',
        flex: 1,
        alignItems: 'center'
       
    },
    logo: {
        width: 146,
        height: 25,
        marginTop: 78,
        marginLeft: 114,
        alignItems: 'center',
        position: 'absolute'
    },
    botao__apple:{
        marginTop: 352,
        position: 'absolute',
    },
    botao__google:{
        marginTop: 416,
        position: 'absolute'
    },
    botao__facebook: {
        position: 'absolute',
        marginTop: 480,
    },
    texto1: {
        marginTop: 568,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
        color: '#ffffff'
    
    },
    botao__signUp: {
        alignItems: 'center',
        marginTop: 40,
        width: 324
    }, texto2:{
        paddingTop: 24,
        textAlign: 'center',
        marginHorizontal: 24,
        color: '#666680',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.2
    }

}) 