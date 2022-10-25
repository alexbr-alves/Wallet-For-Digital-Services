import { StyleSheet, Dimensions } from "react-native"; 
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        backgroundColor: '#1c1c23',
        flex: 1,
    },
    areaSup: {
        height: 420,
        borderWidth: 1,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
        borderColor: '#505057',

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
        marginRight: (windowWidth - 155) /2 ,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24
    },
    header__titulo: {
        marginTop: 43,
        marginLeft: 24,
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 40,
        color: '#ffffff',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24
    },
    header__descrit: {
        marginTop: 22,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        color: '#a2a2b5',
        marginLeft: 16
    },
    header__mes:{
        marginTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#505057',
        backgroundColor: '#30303b',
        fontSize: 12,
        fontWeight:'500',
        lineHeight: 16,
        letterSpacing: 0.3,
        color: '#ffffff',
    },
    body: {
        marginTop: 30,
        marginLeft: 24
    },
    body__card: {
        height: 103,
        width: 48,
        marginRight: 8,
        backgroundColor: '#30303b',
        borderWidth: 1,
        borderColor:  '#30303b',
        alignItems: "center",
        borderRadius: 16
    },
    body__number: {
        marginTop: 8,
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 32,
        color: '#ffffff',

    },
    body__day: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.2,
        color: '#a2a2b5'
    },
    body__areaSup: {
        marginTop: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 24
    },
    body__textSup: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 32,
        color: '#ffffff'
    },
    body__areaInf: {
        marginHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    body__textInf: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#a2a2b5', 
        letterSpacing: 0.2
    },
    services: {
        flexDirection: "row",
        marginTop: 14,
        marginHorizontal: 24,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 50
    },
    services__cards: {
        width: (windowWidth - 56) / 2,
        borderWidth: 1,
        borderRadius: 16,
        height: 160,
        backgroundColor: '#4b4b5f',
        marginTop: 10,
    },
    services__icon: {
        margin: 16
    },
    services__name: {
        marginLeft: 16,
        marginTop: 20,
        fontWeight: '600',
        fontSize: 14, 
        lineHeight: 20,
        color: '#ffffff'
    },
    services__price: {
        marginLeft: 16,
        marginTop: 10,
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 32,
        color: '#ffffff'
    }
}) 