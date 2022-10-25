import { StyleSheet } from "react-native"; 

export default StyleSheet.create({
    container: {
        backgroundColor: '#1c1c23',
        flex: 1,
       
    },
    areaSuperior: {
    backgroundColor: '#292932',
    height: 476,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    

   },
   iconBack: {
    marginLeft: 24,
    marginTop: 52
   },
   texoNew: {
    marginTop: 52,
    marginLeft: '35%',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#a2a2b5',
    fontWeight: '400',
   },
   textoAdd: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 40,
    color: '#ffffff',
    lineHeight: 40,

   },
   areaIcones: {
    alignItems: 'center',
    marginHorizontal: 40
   },
   imageIcone1:{
    width: 161,
    height: 161,
    marginTop: 58,
    marginLeft: 100,
    
   },
   imageIcone2:{
    width: 161,
    height: 161,
    marginTop: 58,
   
   },
   imageIcone3:{
    width: 161,
    height: 161,
    marginTop: 58,
    marginRight: 100
   },
   textoIcone1: {
    marginTop: 23,
    fontWeight: '600',
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 100
   },
   textoIcone2: {
    marginTop: 23,
    fontWeight: '600',
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 20,

   },
   textoIcone3: {
    marginTop: 23,
    fontWeight: '600',
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 20,
    marginRight: 100
   },
   description__texto: {
    color: '#666680',
    textAlign: 'center',
    marginTop: 24,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
    
   },
   description__input: {
    borderWidth: 1,
    borderColor: "#353542",
    borderRadius: 999,
    marginHorizontal: 24,
    alignItems: 'center',
    marginTop: 8,
    height: 48,
    paddingLeft: 25
   },

   price:{
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 23
   },
   price__title: {
    color: '#83839C',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center'
   },
   price__value: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    color: '#ffffff'
   },
   price__base:{
    color: '#353542',
    textAlign: 'center'
   },
   add: {
    alignSelf: 'center',
    marginTop: 15
   }

  
}) 