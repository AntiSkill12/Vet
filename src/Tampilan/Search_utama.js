import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Logo from '../Gambar/image_contoh.png'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const Search_utama = () => {
const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Cari Klinik Terdekat
                </Text> 
            </View>

            <View style={styles.jalan}>
                <Icon name='location' size={30} color="#875C25"
                style={{position: 'absolute', top: 10, left:25,}}/>
                <Text style={styles.text2}>
                    Jalan Sriwijaya Kabil Batam
                </Text>
                <Icon name='pencil-sharp' size={20} color="#A7A7A7"
                style={{position: 'absolute', top: 15, right: 30,}}/>
            </View>

            <View style={styles.container3}>
                <TextInput
                style={styles.input}
                placeholder="Cari Klinik Terdekat"
                placeholderTextColor="#CACACA"
                />   
                <Icon name='search' size={20} color="#CACACA"
                style={{position: 'absolute', top: 32, left:45,}}/>
            </View>

            <ScrollView style={{backgroundColor:'#FFFFFF'}}>
                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                 onPress={() => navigation.navigate('Detail_page')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Now
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Detail_page')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Now
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Detail_page')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Now
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                 onPress={() => navigation.navigate('Detail_page')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Now
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Detail_page')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Now
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                 onPress={() => navigation.navigate('Detail_page')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Now
                    </Text>
                </TouchableOpacity>
                </View>
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
        marginBottom: 14,
        elevation:5,
        bottom:35,
        marginTop:30,
    },
    container3: {
        paddingHorizontal: 25,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        paddingBottom: 15,
        
    },
    input:{
        width: 310,
        height: 50,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 55, 
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

export default Search_utama
