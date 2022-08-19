import { StyleSheet } from "react-native"; 


export default StyleSheet.create({
    container: {
        backgroundColor: '#0e0e12',
        flex: 1,
       
    },
    areaSuperior: {
    backgroundColor: '#292932',
    height: 334,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginHorizontal: 28,
    marginTop: 24,
 
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 28,
        marginTop: 32,    
    },
    header__text: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.2,
        color: '#a2a2b5',

    },
    info__logo: {
        alignSelf: 'center',
        width: 106,
        height: 106,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 31.8,
        marginTop: 34
    }, 
    info__name: {
        alignSelf: 'center',
        marginTop: 16,
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 42,
        color:  '#ffffff'
    },
    info__price: {
        alignSelf:'center',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 32,
        color: '#a2a2b5'
    },




    areaInferior: {
        backgroundColor: '#292932',
        height: 422,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        marginHorizontal: 28,
        marginTop: 2,
    },
    details: {
        marginTop: 29,
        marginHorizontal: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: (78, 78, 97, 0.2),
        paddingHorizontal: 20,
    },
    details__item1: {
        marginVertical: 16,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        color: '#ffffff'

    },
    details__item2: {
        marginVertical: 16,
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#a2a2b5'
    },
    bottom__save: {
        marginTop: 20,
        alignSelf: 'center'
    }
}) 