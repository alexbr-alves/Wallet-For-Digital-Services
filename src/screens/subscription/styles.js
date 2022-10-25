import { StyleSheet, Dimensions, Platform } from "react-native"; 
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        backgroundColor: '#1c1c23',
        flex: 1,   
    },
    iconBack: {
        marginTop: 50,
        marginLeft: 20
    },
    header: {
        flexDirection: 'row', 
        height: 30, 
        width: '100%',
        marginTop: 10
    },
    headerActive: {
        backgroundColor: '#fff', 
        width: '33%', 
        justifyContent: 'center', 
        alignItems: 'center',
        
    },
    headerInactive: {
        backgroundColor: '#000000', 
        width: '33%', 
        justifyContent: 'center', 
        alignItems: 'center',      
    },
    header__textActive: {
        color: '#000000',
        fontSize: 18,
        lineHeight: 24,
        fontWeight: 'bold'
    },
    header__textInactive: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    body: {
       flexDirection: 'row',
       height: 60,
       borderBottomWidth: 1,
    },
    bodyItem: {
        height: 60, 
        justifyContent: 'center',
        width: windowWidth - 50,   
    },
    body__text: {
        color: '#fff', 
        marginLeft: 10,        
    },
    body__icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50
    },
    footer: {
        marginTop:  windowHeight,
        position: 'absolute', 
        flexDirection: 'row', 
        height: 50, 
        //width: '100%',
        bottom: Platform.OS == 'ios'? 20 : null
    },
    footerAtivo: {
        backgroundColor: '#fff', 
        width: windowWidth / 3,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    footerAtivo__on: {
        backgroundColor: '#008000', 
        width: windowWidth / 3,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    footerPassivo: {
        backgroundColor: '#fff', 
        width: windowWidth / 3
    },
    footerPassivo__on: {
        backgroundColor: '#ff0000', 
        width: windowWidth / 3
    },
    footerFinalizar: {
        backgroundColor: '#fff', 
        width: (windowWidth / 3) - 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        marginLeft: 20
    },
    footer__text: {
        color: '#000000',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginLeft: 10
    },
    footer__value: {
        color: '#000000',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginLeft: 10
    },
    footer__finalizar: {
        color: '#000000',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        letterSpacing: 2
    },
    modal: {
        height: 200,
        width: 200,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
  },
  modal__AreaIcone: {
        alignItems: 'flex-end',
        marginTop: 10,
        marginRight: 10
  },
  modal__icone:{
        fontSize: 20 
  } 
}) 