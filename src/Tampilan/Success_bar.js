import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Logo from '../Gambar/Logo1.png'
import  Icon  from 'react-native-vector-icons/Ionicons'


const Success_bar = ({navigation}) => {
    setTimeout(() => {
        navigation.replace('Detail_page');
    }, 3000);
  return (
    <View style={styles.container}>
      <Icon name='md-checkmark-circle' size={200} color='#FDCB5A' style={{left:15,}}/>
      <Text
        style={{
        color: "#FFFFFF",     
        fontSize: 40,
        marginTop: 10,
      }}>
        Booking Sukses
      </Text>
    </View>
    )
  }
  
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: "#1A3150",
    alignItems: "center",
    justifyContent: 'center',
  },
})
  
  export default Success_bar
