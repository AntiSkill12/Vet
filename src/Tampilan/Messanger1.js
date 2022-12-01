import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Messanger1 = () => {
const navigation = useNavigation();
    return (
        
        <View>
            
            <View style={styles.container1}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
            <Icon style={{top:5}} name="arrow-left" size={17} color="white" />
            <Text
            style={{
              fontFamily:"Roboto",
              fontSize:20,
              fontWeight:'bold',
              color:"white"}}
            > Sebelumnya</Text>
            </View>
            </TouchableOpacity>
            </View>

            <View style={styles.container3}>
                <TextInput
                style={styles.input}
                placeholder="Type your message here"
                placeholderTextColor="#CACACA"
                />   
                <Icon name='send' size={20} color="#CACACA"
                style={{position: 'absolute', top: 558, left:290, }}/>
            </View>

        </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1A3150',
        paddingHorizontal: 25,
        paddingTop: 20,
    },
    container1:{
      backgroundColor:'#1A3150',
      paddingHorizontal: 25,
      paddingTop: 25,
      paddingBottom:25
    },
    touch: {
        flexDirection:'row',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 25,
        paddingTop: 10,
        marginHorizontal:20,
        alignSelf:'center',
        fontWeight: 'bold',
    },
    text2: {
        marginTop:15,
        marginLeft: 45,
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    jalan:{
        paddingHorizontal: 25,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    container2: {
        marginHorizontal: 25,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        elevation:5,
        marginBottom:14,
        bottom:15,marginTop:30
    },
    container3: {
        paddingTop:573,
        paddingHorizontal: 25,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        paddingBottom: 15,
        
    },
    input:{
        width: 310,
        height: 40,
        backgroundColor: '#F1F1F1',
        borderRadius: 4,
        marginTop: 25,
        paddingLeft: 20,
        bottom:50 
    },
    textcontainer2: {
        fontSize: 15,
        color: '#875C25',
        marginStart: 5,
        marginTop: 5,
        marginLeft: 15,
    },
    text1container2: {
        fontSize: 17,
        color: '#000',
        right: 48,
        marginTop: 23,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    text2container2: {
        fontSize: 15,
        color: '#1A3150',
        right: 182,
        marginTop: 45,
        fontWeight: 'bold',
    },
    buttoncontainer2: {
        backgroundColor: '#FDCB5A',
        color: '#000',
        marginTop: 35,
        borderRadius: 3,
        position: 'absolute',
        right: 15,
        width: 155,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        top: 40,
    },
    buttontextcontainer2: {
        color: '#000',
        fontSize: 14,
        marginHorizontal: 20,
    },
    logo: {
        width: 124,
        height: 123,
        resizeMode: 'cover',
    },
})

export default Messanger1