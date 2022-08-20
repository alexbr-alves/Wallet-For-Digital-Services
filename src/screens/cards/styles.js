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
        marginRight: (windowWidth - 155) /2 ,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24
    },
    card: {
        alignSelf: 'center',
        marginTop: 43
    },
    title: {
        alignSelf: 'center',
        marginTop: 22,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        color: '#ffffff'
    },
    icon__row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16
    },
    icon:{
        width: 40,
        height: 40,
        marginHorizontal: 4
    },
    addCard: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 72,
        borderWidth: 1,
        marginHorizontal: 24,
        height: 52,
        alignItems: 'center',
        borderRadius: 16,
        borderStyle: 'dashed',
        borderColor: '#4e4e61',
        backgroundColor: '#353542'
    },
    addCard__text: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        color: '#a2a2b5',
        paddingRight: 5
    }
}) 