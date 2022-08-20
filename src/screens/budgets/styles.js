import { StyleSheet, Dimensions } from "react-native"; 

const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        backgroundColor: '#1c1c23',
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        marginTop: 52,
        marginRight: 24
    },
    header__text: {
        marginRight: 75,
        color: '#a2a2b5',
        marginRight: (windowWidth - 48 - 157) /2 ,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24
    },
    arco: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 43,
        
    },
    arco__image: {
        position: 'absolute',
        alignSelf: 'center',
    },
    arco__text1: {
        marginTop: 73,
        alignSelf: 'center',
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 36
    },
    arco__text2: {
        marginTop: 4,
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.2,
        color: "#a2a2b5"
    },
    arco__text3: {
        paddingVertical: 20,
        paddingHorizontal: 64,
        marginTop: 40,
        borderWidth: 1,
        width: windowWidth - 48,
        textAlign: 'center',
        borderRadius: 16,
        borderColor: '#4e4e61',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        color: '#ffffff'
    },




    body: {
        marginHorizontal: 24,
        marginTop: 16
    },
    body__collumn: {
        borderWidth: 1,
        marginVertical: 5,
        height: 84,
        justifyContent: 'center',
        borderRadius: 16 ,
        borderColor: "#a2a2b5"
    },

    body__row: {
        flexDirection: 'row',
        marginHorizontal: 16,
        justifyContent: 'space-between'
   },
   body__rowSup: {
    justifyContent: 'space-between',
   },
   body__rowInf: {
    justifyContent: 'space-between',
   
   }, 
   body__textSup1: {
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 14,
    lineHeight: 20,
   },
   body__textSup2: {
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'right',
    fontSize: 14,
    lineHeight: 20,
   },
   body__textInf: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    color: '#a2a2b5',
    paddingVertical: 10
   },
   body__bar: {
    marginLeft: 16
   },
   body__add: {
    marginTop: 5,
    borderWidth: 1,
    height: 84,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 16,
    borderColor: "#a2a2b5"
   },
   body__addText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#a2a2b5', 
    marginRight: 5
   }
}) 