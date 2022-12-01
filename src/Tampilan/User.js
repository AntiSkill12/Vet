import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ComelFadia from 'react-native-vector-icons/FontAwesome5'
import ComelRaras from 'react-native-vector-icons/MaterialCommunityIcons'
import ComelAja from 'react-native-vector-icons/Octicons'

const Appoinment = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container1}>

          <Text style={{
            color: '#FFFFFF',
            fontSize: 16,
            paddingTop: 10,
            alignSelf:'center',
            fontWeight: 'bold',
            top:35
          }}>
            Profile
          </Text>

          <TouchableOpacity style={{
            height:175, backgroundColor: "#fff", top: 90, marginHorizontal: 13, 
            flexDirection:'row', borderTopColor: "#fff", 
            borderBottomColor:"#1A3150", borderLeftColor:"#1A3150", borderRightColor:"#1A3150", elevation:10
          }}>
            <Image style={{width: 54,height: 53,resizeMode: 'cover',borderRadius:75, left: 25, top: 25,}} 
            source={require('../Gambar/Riafky.jpg')}/>
            <Text style={{
              fontWeight: 'bold', color:"#000", left: 43, top: 25,
            }}>
              Muhammad Riafky {'\n'} Novalyansyah
            </Text>
            <ComelFadia onPress={() => navigation.navigate('EditDetails')} name='pen' size={17} color="#000"
                style={{position: 'absolute',left:290, top:20}}/>
            <Text style={{
              color:"#000",top: 65, left: -80,}}>
              +628 2288201110
            </Text>
            <ComelRaras name='calendar-range' size={20} color="#1A3150"
                style={{position: 'absolute',top:115, right:273,}}/>
            <Text style={{position: 'absolute',top:135, right:260, fontSize: 13, color:"#1A3150"}}>
              24 Years
            </Text>
            <Icon name='pets' size={20} color="#1A3150"
                style={{position: 'absolute',top:115, right:151,}}/>
            <Text style={{position: 'absolute',top:135, right:143, fontSize: 13, color:"#1A3150"}}>
              4 Pets
            </Text>
            <ComelAja name='checklist' size={20} color="#1A3150"
                style={{position: 'absolute',top:115, right:31,}}/>
            <Text style={{position: 'absolute',top:135, right:23, fontSize: 13, color:"#1A3150"}}>
              3 times
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            height:55, backgroundColor: "#fff", top: 110, elevation: 10, marginHorizontal: 13, 
            flexDirection:'row',
          }}>
          <Icon name='logout' size={25} color="#1A3150"
                style={{position: 'absolute',top:17, right:271,}}/>
          <Text style={{
            left:70, top: 17, color:"#000", fontSize:17
          }}>Logout</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    flex: 1,
  },
  container1:{
        backgroundColor:'#1A3150',
        height: 90
  },
})

export default Appoinment