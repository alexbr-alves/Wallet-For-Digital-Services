import { StyleSheet } from "react-native"; 

export default StyleSheet.create({
    container: {
        backgroundColor: '#1c1c23',
        flex: 1,
       
    },
    logo: {
        width: 146,
        height: 25,
        marginTop: 78,
        marginLeft: 114
    },
    login: {
        marginTop: 168,
        marginHorizontal: 24,
        
    },
    login__texto: {
        color: '#666680',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.2,   
    },
    login__input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#353542',
        marginTop: 4,
        borderRadius: 16,
        color: '#FFFFFF',
        fontSize: 15,
        order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
        paddingLeft: 25,
        alignItems:'center'
    },
    password: {
        marginTop: 16,
        marginHorizontal: 24,
    },
    password__texto: {
        color: '#666680',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.2,   
    },
    password__input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#353542',
        marginTop: 4,
        borderRadius: 16,
        color: '#FFFFFF',
        fontSize: 15,
        order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
        paddingLeft: 25,
       
    },
    checkPassword: {
        marginHorizontal: 24,
        marginTop: 24,
        marginRight: 32
  
    },
    checkPassword__text: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#666680',
        letterSpacing: 0.2,
        marginLeft: 8
    },




    buttomGet: {
        marginTop: 20,
    },

    botaoSignUn: {
        marginTop: 80,
        alignItems: 'center'
    },
    botaoSignUn__texto1:{
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.2
    },
    botaoSignUn__area:{
        marginTop: 20,
        height: 48,
        width: 324,
        backgroundColor: '#333339',
        borderColor: '#4b4b50',
        borderWidth: 1,
        marginHorizontal: 26,
        justifyContent: 'center',
        borderRadius: 999

    },
    botaoSignUn__texto2:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight:'600',
        fontSize: 14,
        lineHeight: 20,
    }
}) 