import { View, Text, StyleSheet,  TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Sign_in = () => {
  const navigation = useNavigation();

  const [show, setShow] = React.useState(false);
  const [Visible, setVisible] = React.useState(true);

  return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.touch}>
            <Icon name="arrow-left" size={20} color="white" style={{paddingTop:12,}}/>
            <Text style={styles.text}>
              Sebelumnya 
            </Text>
        </TouchableOpacity>
        <Text style={{
            color: 'white',
            fontSize: 24,
            marginBottom: 20,
        }}>Welcome Back</Text>
        <View>
            <Text style={styles.text1}>
                Username
            </Text>
            <TextInput
            style={styles.input}
            placeholder="Enter your Username"
            placeholderTextColor="#C2CDDB"
            />
            <Text style={styles.text1}>
                Password
            </Text>
            <TextInput
            style={styles.input}
            secureTextEntry={Visible}
            placeholder="Enter Your Password"
            placeholderTextColor="#C2CDDB"
            />
            <TouchableOpacity
            onPress={() => {
                setVisible(!Visible);
                setShow(!show);
            }}>
            <Icon
                style={{
                left: 270,
                marginTop: -60,
                }}
                name={show === false ? 'eye' : 'eye-off'}
                color={'#F1F1F1'}
                size={25}
            />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text style={styles.textButton}>Forget password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Dashboard')}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize: 20,
                    }}>Submit</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>
            Don't have an account? please
            <Text style={{
                color: '#FDCB5A',
            }}
            onPress={() => navigation.navigate('Sign_up')}
            > Sign Up</Text></Text> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "#1A3150",
        paddingTop:10,
        paddingLeft:25,
        paddingRight:25,
    },
    touch: {
        flexDirection: 'row',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 20,
        paddingTop: 10,
        marginHorizontal:20,
    },
    text1: {
        color: '#F8F8F8',
        marginBottom: 5,
        fontSize: 14,
    },
    input: {
        width: 310,
        height: 50,
        backgroundColor: '#1A3150',
        borderRadius: 10,
        color:'white',
        paddingHorizontal: 20,
        marginBottom: 20,
        borderBottomWidth:1,
        borderRightWidth:1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#749DD2',
        borderRightColor:'#749DD2',
        borderLeftColor:'#749DD2',
        borderTopColor:'#749DD2',
      },
    textButton: {
        color: '#FDCB5A',
        fontfamily: 'Roboto',
        fontStyle: 'normal',
        textAlign: 'right',
        fontSize: 14,
        marginBottom: 30,
      },
    text2: {
        color: '#FFFFFF',
        fontSize: 14,
        marginBottom: 20,
        paddingTop: 20,
        alignSelf:'center',
    },
    button: {
        backgroundColor: "#FDCB5A",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
})
export default Sign_in