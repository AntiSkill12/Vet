import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import ComelRaras from 'react-native-vector-icons/MaterialCommunityIcons'

const EditDetails = () => {
const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.touch}>
                    <Icon name="arrow-back" size={20} color="white" style={{paddingTop:12,}}/>
                    <Text style={styles.text}>
                    Sebelumnya 
                    </Text>
                </TouchableOpacity>     
            </View>
            <ScrollView>
            <View style={{backgroundColor:"#D3D3D3",  elevation: 3, height:40}}>
              <Text style={{color:"#000", marginTop: 9, marginLeft:20,}}>
                Basic Information<Text style={{color:"#ff0000"}}>{"*"}</Text>
              </Text>
            </View>

            <View style={{backgroundColor:"#F1F1F1", elevation: 3, height:150}}>
              <Text style={{color:"#000", marginTop: 9, marginLeft:20, fontSize:12, top:4}}>
                Full Name
              </Text>
              <TextInput
                style={{
                borderColor: '#749DD2',
                borderWidth: 1.5,
                paddingVertical:5,
                marginHorizontal:18,
                marginBottom: 10,
                marginTop:10,
                paddingLeft:17,
                borderRadius: 5,
                fontFamily: 'roboto',
                fontSize: 12,
                color:"#000"}}
                placeholder="Muhammad Riafky Novalyansyah"
                placeholderTextColor="#1A3150"
              />

              <Text style={{color:"#000", marginTop: -5, marginLeft:20, fontSize:11,}}>
                Gender
              </Text>

              <View style={{flexDirection:'row', }}>
              <ComelRaras name='circle-slice-8' size={25} color="#FDCB5A"
                  style={{position: 'absolute', marginLeft:17, marginTop: 5}}/>
                  <Text style={{marginLeft:53, marginTop: 8, color:"#000", fontFamily:"Roboto"}}>
                    Male
                  </Text>
              <ComelRaras name='circle-outline' size={25} color="#FDCB5A"
                  style={{position: 'absolute', marginLeft:157, marginTop: 5}}/>
                  <Text style={{marginLeft:113, marginTop: 8, color:"#000", fontFamily:"Roboto"}}>
                    Female
                  </Text>
              </View>
            </View> 

            <View style={{backgroundColor:"#D3D3D3",  elevation: 3, height:40}}>
              <Text style={{color:"#000", marginTop: 9, marginLeft:20,}}>
                Contact Details
              </Text>
            </View>

            <View style={{backgroundColor:"#F1F1F1", elevation: 3, height:150}}>
              <Text style={{color:"#000", marginTop: 9, marginLeft:20, fontSize:12, top:4}}>
                Mobile Number
              </Text>
              <TextInput
                style={{
                borderColor: '#749DD2',
                borderWidth: 1.5,
                paddingVertical:5,
                marginHorizontal:18,
                marginBottom: 10,
                marginTop:10,
                paddingLeft:17,
                borderRadius: 5,
                fontFamily: 'roboto',
                fontSize: 12,
                color:"#000"}}
                placeholder="+628 2288201110"
                placeholderTextColor="#1A3150"
              />
            </View> 
            <View style={{backgroundColor:"#F1F1F1", height:150, top:-70}}>
              <Text style={{color:"#000", marginTop: 9, marginLeft:20, fontSize:12, top:4}}>
                Email
              </Text>
              <TextInput
                style={{
                borderColor: '#749DD2',
                borderWidth: 1.5,
                paddingVertical:5,
                marginHorizontal:18,
                marginBottom: 10,
                marginTop:10,
                paddingLeft:17,
                borderRadius: 5,
                fontFamily: 'roboto',
                fontSize: 12,
                color:"#000"}}
                placeholder="muhammadriafky@gmail.com"
                placeholderTextColor="#1A3150"
              />
            </View>

            <View style={{backgroundColor:"#D3D3D3",  elevation: 3, height:40, top:-110}}>
              <Text style={{color:"#000", marginTop: 9, marginLeft:20,}}>
                Informasi Tentang Hewan Peliharaan
              </Text>
            </View>

            <View style={{backgroundColor:"#F1F1F1", elevation: 3, height:150, top:-110}}>
              <Text style={{color:"#000", marginTop: 9, marginLeft:20, fontSize:12, top:4}}>
                Jumlah Hewan Peliharaan
              </Text>
              <TextInput
                style={{
                borderColor: '#749DD2',
                borderWidth: 1.5,
                paddingVertical:5,
                marginHorizontal:18,
                marginBottom: 10,
                marginTop:10,
                paddingLeft:17,
                borderRadius: 5,
                fontFamily: 'roboto',
                fontSize: 12,
                color:"#000"}}
                placeholder="4 Pets"
                placeholderTextColor="#1A3150"
              />
            </View> 
            <View style={{backgroundColor:"#F1F1F1", height:90, top:-180}}>
              <Text style={{color:"#000", marginTop: 9, marginLeft:20, fontSize:12, top:4}}>
                Waktu berkunjung untuk Perawatan
              </Text>
              <TextInput
                style={{
                borderColor: '#749DD2',
                borderWidth: 1.5,
                paddingVertical:5,
                marginHorizontal:18,
                marginBottom: 10,
                marginTop:10,
                paddingLeft:17,
                borderRadius: 5,
                fontFamily: 'roboto',
                fontSize: 12,
                color:"#000"}}
                placeholder="3 times"
                placeholderTextColor="#1A3150"
              />
            </View>
            
            <TouchableOpacity style={styles.button1}
                    onPress={() => navigation.goBack()}>
                        <Text style={styles.textButton}>
                        Tambahkan</Text>       
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
},
logo: {
    width: 370,
    height: 250,
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
    right: 100,
    marginTop: 23,
    fontWeight: 'bold',
    marginLeft: 5,
},
ceklis: {
  marginTop: 23, 
  left: 215, 
},
text2container2: {
    fontSize: 14,
    color: '#1A3150',
    right: 252,
    marginTop: 45,
   
},
container2: {
    marginHorizontal: 10,
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    marginBottom: 15,
},
image: {
    top: 5,
    width: 60,
    height: 60,
    left:20,
    resizeMode: 'cover',
},
container3: {
    marginHorizontal: 25,
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    marginBottom: 15,
    elevation: 5,
    paddingVertical: 10,
},
waktu: {
    flexDirection:'row',
    paddingVertical:20,
},
waktuicon: {
    flexDirection:'row',
    marginLeft: 50,
    elevation:2,
    paddingHorizontal:10,
    bottom: 10,
    paddingBottom:20,
    
},
waktuicon1 :{
    flexDirection:'row',
    marginLeft: 30,
    paddingHorizontal:5,
    borderColor: '#FDCB5A',
    borderBottomWidth:1,
    borderTopWidth:1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderRadius:10,
},
daerah: {
    marginLeft:20,
    marginBottom: 70,
    elevation:5,
},
button: {
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    marginBottom: 30,
    elevation:5, 
},
textButton: {
    color: 'black',
    fontSize: 15,
    fontWeight:"bold"
},
button2: {
    width: 130,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor:'#FFFFFF',
    elevation:5,
},
container4: {
    marginHorizontal: 10,
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    marginBottom: 15,
    elevation: 5,
    paddingVertical: 10,
},
text1container4: {
    fontSize: 17,
    color: '#000',
    left:10,
    marginTop: 23,
    marginLeft: 5,
},
button1 : {
    width: 300,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FDCB5A',
    bottom:100, 
    left:25,
},
})

export default EditDetails