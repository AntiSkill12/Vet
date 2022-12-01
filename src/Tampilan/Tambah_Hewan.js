import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const Tambah_Hewan = () => {
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
            <View style={styles.container2}>
                <Text style={styles.text1}>
                    Nama Hewan Peliharan Kamu
                </Text>

                <TextInput 
                style={styles.input}
                placeholder="Sanren"
                placeholderTextColor="#1A3150"/>
                
                <Text style={styles.text1}>
                    Pilih Hewan Peliharaan Kamu
                </Text>
                <View style={{flexDirection:'row',}}>
                    <TouchableOpacity style={{flexDirection:'row',}}>
                        <View style={styles.container31}>
                        <Image source={require('../Gambar/anjing.png')} style={styles.image}/>
                            <Text style={styles.text1container4}>
                                Anjing
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.container3}>
                        <Image source={require('../Gambar/hamster.png')} style={styles.image}/>
                            <Text style={styles.text1container4}>
                                Hamster
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.container3}>
                        <Image source={require('../Gambar/kelinci.png')} style={styles.image}/>
                            <Text style={styles.text1container4}>
                                Kelinci
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',}}>
                    <TouchableOpacity>
                        <View style={styles.container3}>
                        <Image source={require('../Gambar/kucing.png')} style={styles.image}/>
                            <Text style={styles.text1container4}>
                                Kucing
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.container3}>
                        <Image source={require('../Gambar/kucing.png')} style={styles.image}/>
                            <Text style={styles.text1container4}>
                                Kucing
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.text1}>
                    Pilih Kelamin Peliharaan Kamu
                </Text>

                <View style={{flexDirection:'row',}}>
                    <TouchableOpacity>
                        <View style={styles.container3}>
                        <Icon name='male-sharp' size={30} color='#000000' style={styles.icon}/>
                            <Text style={styles.text1container4}>
                                Male
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.container31}>
                        <Icon name='female' size={30} color='#000000' style={styles.icon}/>
                            <Text style={styles.text1container4}>
                                Female
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container4}>
                <TouchableOpacity style={styles.button1}
                    onPress={() => navigation.navigate('Detail_page')}>
                    <Text style={styles.textButton}>
                    Tambahkan
                    </Text>   
                </TouchableOpacity>
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
input:{
    width: 310,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 20,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderRightWidth:1,
    borderLeftWidth:1,
},   
container2: {
    paddingHorizontal: 25,
    backgroundColor:'#FFFFFF',
    paddingBottom: 70,
    marginBottom: 5,
},
text1: {
    color: '#1A3150',
    paddingTop:20,
    fontSize:16,
    fontWeight:'bold',
},
image: {
    width: 30,
    height: 30,
    right:10,
    resizeMode: 'cover',
},
text1container4: {
    fontSize: 13,
    color: '#000',
    right:10,
    marginTop: 10,
    marginLeft: 5,
},
container3: {
    marginRight: 10,
    backgroundColor:'#E0E9F5',
    flexDirection: 'row',
    marginBottom: 14,
    elevation:5,
    marginTop:20,
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:5,
},
container31: {
    marginRight: 10,
    backgroundColor:'#C2CDDB',
    flexDirection: 'row',
    marginBottom: 14,
    elevation:5,
    marginTop:20,
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:5,
},
icon: {
    right:8,
},
container4: {
    paddingLeft:15,
    backgroundColor:'#FFFFFF',
    paddingBottom: 20,
},
button1 : {
    width: 300,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FDCB5A',  
    left:15,
    marginTop:20,
},
textButton: {
    color: 'black',
    fontSize: 20,
    fontWeight:'bold',
},
})

export default Tambah_Hewan
