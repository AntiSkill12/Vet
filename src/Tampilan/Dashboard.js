import { View, Text, StyleSheet, Image,  TouchableOpacity,ScrollView, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import Logo from '../Gambar/Logo1.png'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'


const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View>
        <View style={styles.container}>
          <Image
            source={Logo}
            style={styles.logo}
          />
          <Text style={styles.textcontainer}>
            VET
          </Text>
          <Icon name="envelope-o" size={20} color="white"
          style={{
            position: 'absolute',
            left: 270,
            top: 30,
          }}/>
        </View>
        <View style={{
          backgroundColor:'#FDCB5A',
          marginLeft: 315,
          top: 30,
          borderRadius: 100,
          paddingHorizontal:8,
          position:'absolute',
          }}>
          <Text style={{
            
            fontWeight:'bold',
            fontSize: 16,
          }}>A</Text>
        </View>

      <ScrollView style={styles.scrolldown}>
          <View style={styles.container2}>
            <Image source={require('../Gambar/Ellipse.png')}
            style={styles.baground}/>
             <View style={styles.wrapper}>
                <Swiper
                    showsButtons={false}
                    autoplay={true}
                    dotColor={'#C2CDDB'}
                    activeDotColor={'#FDCB5A'}
                >
                    <Image source={require('../Gambar/image_contoh.png')}
                        style={styles.slide}
                    />
                    <Image source={require('../Gambar/image_contoh.png')}
                        style={styles.slide}
                    />
                    <Image source={require('../Gambar/image_contoh.png')}
                        style={styles.slide}
                    />
                    <Image source={require('../Gambar/image_contoh.png')}
                        style={styles.slide}
                    />
                    <Image source={require('../Gambar/image_contoh.png')}
                        style={styles.slide}
                    />
                    <Image source={require('../Gambar/image_contoh.png')}
                        style={styles.slide}
                    />
                </Swiper>
            </View>

            <ScrollView horizontal={true} style={{  }}>
              <View style={{
                marginLeft: 35,
                marginHorizontal: 1,
                
                }}>
                <Image source={require('../Gambar/kucing.png')}
                style={{ width:45, height: 50,marginTop: 20,}}/>
              </View>
              <View style={{
                marginLeft: 30,
                marginHorizontal: 1,
              
                }}>
                <Image source={require('../Gambar/anjing.png')}
                style={{ width:45, height: 50, marginTop: 20, left:5,}}/>
              </View>
              <View style={{
                marginLeft: 50,
                marginHorizontal: 1,
                
                }}>
                <Image source={require('../Gambar/hamster.png')}
                style={{ width:45, height: 50,marginTop: 20, right:5,}}/>
              </View>
              <View style={{
                marginLeft: 32,
                marginHorizontal: 1,
                
                }}>
                <Image source={require('../Gambar/kelinci.png')}
                style={{ width:45, height: 50,marginTop: 20, }}/>
              </View>
            </ScrollView>
            <ScrollView horizontal={true}>
              <Text style={{
                color:"#000",
                marginLeft: 38,
                marginHorizontal: 30,
                
                }}>
                Kucing
              </Text>
              <Text style={{
                marginLeft: 9,
                color:"#000",
                }}>
                Anjing
              </Text>
              <Text style={{
                marginLeft:38,
                color:"#000",
                }}>
                Hamster
              </Text>
              <Text style={{
                marginLeft: 39,
                color:"#000",
                }}>
                Kelinci
              </Text>
            </ScrollView>
            <View style={styles.textcontainer2}>
                <Text style={{fontWeight:'bold', color:'#000000', fontSize:18,}}>
                  Konsultasi Klinik
                </Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Search_board')}>
                  <Text style={{fontSize: 12,}}>
                    Lihat Lainnya »
                  </Text>
                </TouchableOpacity>
              </View>

            <ScrollView horizontal={true} 
            style={styles.daerah}>
              <TouchableOpacity style={{
                width: 90,
                height: 30,
                marginHorizontal: 5,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
                backgroundColor:'#FDCB5A',
              }}>
                <Text style={styles.textButton}>
                  All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                  Batam</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                  Pinang</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                  Jakarta</Text>
              </TouchableOpacity>
            </ScrollView>  

       
            <View style={styles.scrolldown2}>
              <Image source={require ('../Gambar/image_contoh.png')} style={styles.contohgambar}/>
              <Text style={styles.scrolldowntext}>
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

            <View style={styles.scrolldown2}>
              <Image source={require ('../Gambar/image_contoh.png')} style={styles.contohgambar1}/>
              <Text style={styles.scrolldowntext}>
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

            <View style={styles.scrolldown2}>
              <Image source={require ('../Gambar/image_contoh.png')} style={styles.contohgambar1}/>
              <Text style={styles.scrolldowntext}>
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
            
            <View style={styles.scrolldown2}>
              <Image source={require ('../Gambar/image_contoh.png')} style={styles.contohgambar1}/>
              <Text style={styles.scrolldowntext}>
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

            <View style={styles.scrolldown2}>
              <Image source={require ('../Gambar/image_contoh.png')} style={styles.contohgambar1}/>
              <Text style={styles.scrolldowntext}>
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
            
          </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingLeft:25,
    flexDirection:'row',
    height:65,
    backgroundColor:'#1A3150',
  },
  logo: {
    width: 50,
    height: 20,
    top:30,
  },
  textcontainer: {
    color: "#FDCB5A",     
    fontSize: 18,
    marginTop: 27,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
  baground:{
    flex: 1,
    position: 'absolute',
    width: 360,
    height: 120,
  },
  container2: {
    backgroundColor: '#FFFFFF',
  },
  
  touchableopacity1: {
    width: 190,
    height:80,
    backgroundColor: "#808080",
    paddingHorizontal:10,
    marginHorizontal: 2,
    borderColor:`#C4C4C4`,
    borderRadius: 3,
    alignItems: "center",
  },
  wrapper: {
    height: 230
  },
  slide: {
    position: 'absolute',
    height: 150,
    width: 270,
    top: 30,
    left: 45,
    borderRadius: 5
  },
  textcontainer2: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:25,
    marginVertical:20,
  },
  
  daerah: {
    marginLeft:20,
    marginBottom: 70,
  },
   button: {
    width: 90,
    height: 30,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderBottomWidth:1,
    borderRightWidth:1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#FDCB5A',
    borderRightColor:'#FDCB5A',
    borderLeftColor:'#FDCB5A',
    borderTopColor:'#FDCB5A', 
  },
  textButton: {
    color: 'black',
    fontSize: 15,
  },
  scrolldown2: {
    marginHorizontal: 25,
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    marginBottom: 15,
    elevation:5,
    bottom: 70,
  },
  scrolldowntext: {
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
contohgambar: {
    width: 124,
    height: 123,
    resizeMode: 'cover',
},
contohgambar1: {
  width: 124,
  height: 123,
  resizeMode: 'cover',
},
})
export default Dashboard