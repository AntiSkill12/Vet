import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Logo from '../Gambar/image5.png'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const Messanger = () => {
const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Messanger
                </Text> 
            </View>

            <ScrollView style={{backgroundColor:'#FFFFFF'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Messanger1')} style={{
                marginTop: 50, height: 110, bottom: 60,
              }}>

              
              <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                  <Text style={styles.text1container2}>
                    RS Kalimanjaro
                  </Text>
                  <Text style={{left:70, top: 30}}>1hr</Text>
                  <Text style={styles.text2container2}>
                    Halo kak, kamu di mana? Sudah bisa {'\n'}ke klinik
                  </Text>
              </View>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Messanger1')} style={{
                marginTop: 5, height: 110, bottom: 60,
              }}>

              
              <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                  <Text style={styles.text1container2}>
                    RS Kalimanjaro
                  </Text>
                  <Text style={{left:70, top: 30}}>1hr</Text>
                  <Text style={styles.text2container2}>
                    Halo kak, kamu di mana? Sudah bisa {'\n'}ke klinik
                  </Text>
              </View>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Messanger1')} style={{
                marginTop: 5, height: 110, bottom: 60,
              }}>

              
              <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                  <Text style={styles.text1container2}>
                    RS Kalimanjaro
                  </Text>
                  <Text style={{left:70, top: 30}}>1hr</Text>
                  <Text style={styles.text2container2}>
                    Halo kak, kamu di mana? Sudah bisa {'\n'}ke klinik
                  </Text>
              </View>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Messanger1')} style={{
                marginTop: 5, height: 110 ,bottom: 60,
              }}>

              
              <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                  <Text style={styles.text1container2}>
                    RS Kalimanjaro
                  </Text>
                  <Text style={{left:70, top: 30}}>1hr</Text>
                  <Text style={styles.text2container2}>
                    Halo kak, kamu di mana? Sudah bisa {'\n'}ke klinik
                  </Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Messanger1')} style={{
                marginTop: 5, height: 110 , bottom: 60,
              }}>

              
              <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                  <Text style={styles.text1container2}>
                    RS Kalimanjaro
                  </Text>
                  <Text style={{left:70, top: 30}}>1hr</Text>
                  <Text style={styles.text2container2}>
                    Halo kak, kamu di mana? Sudah bisa {'\n'}ke klinik
                  </Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Messanger1')} style={{
                marginTop: 5, height: 110 , bottom: 60,
              }}>

              
              <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                  <Text style={styles.text1container2}>
                    RS Kalimanjaro
                  </Text>
                  <Text style={{left:70, top: 30}}>1hr</Text>
                  <Text style={styles.text2container2}>
                    Halo kak, kamu di mana? Sudah bisa {'\n'}ke klinik
                  </Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Messanger1')} style={{
                marginTop: 5, height: 110 , bottom: 60,
              }}>

              
              <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                  <Text style={styles.text1container2}>
                    RS Kalimanjaro
                  </Text>
                  <Text style={{left:70, top: 30}}>1hr</Text>
                  <Text style={styles.text2container2}>
                    Halo kak, kamu di mana? Sudah bisa {'\n'}ke klinik
                  </Text>
              </View>
              </TouchableOpacity>
            </ScrollView>

        </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1A3150',
        paddingHorizontal: 25,
        paddingTop: 20,
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
        bottom: 3,
    },
    text2: {
        marginTop:15,
        marginLeft: 50,
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
        marginBottom:14,
        bottom:35,marginTop:30,
        height: 100
    },
    container3: {
        paddingHorizontal: 25,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        paddingBottom: 35,
        
    },
    input:{
        width: 310,
        height: 50,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 55, 
    },
    textcontainer2: {
        fontSize: 15,
        color: '#875C25',
        marginStart: 5,
        marginLeft: 35,
    },
    text1container2: {
        fontSize: 17,
        color: '#000',
        top:5,
        right: 48,
        marginTop: 23,
        fontWeight: 'bold',
        marginLeft: 50,
    },
    text2container2: {
        top: 10,
        fontSize: 13,
        color: '#1A3150',
        right: 185,
        marginTop: 45,
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
        top: 23,
        right:13,
        width: 54,
        height: 53,
        resizeMode: 'cover',
        borderRadius:75
    },
})

export default Messanger