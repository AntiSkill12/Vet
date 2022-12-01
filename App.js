import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';

import Login from './src/Tampilan/Login';
import Sign_in from './src/Tampilan/Sign_in';
import Sign_up from './src/Tampilan/Sign_up';
import Dashboard from './src/Tampilan/Dashboard';
import Search_board from './src/Tampilan/Search_board';
import Search_utama from './src/Tampilan/Search_utama';
import Detail_page from './src/Tampilan/Detail_page';
import Tambah_Hewan from './src/Tampilan/Tambah_Hewan';
import Success_bar from './src/Tampilan/Success_bar';
import Messanger from './src/Tampilan/Messanger';
import Messanger1 from './src/Tampilan/Messanger1'
import Notifikasi from './src/Tampilan/Notifikasi';
import User from './src/Tampilan/User';
import EditDetails from './src/Tampilan/EditDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FDCB5A',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search_utama}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messanger"
        component={Messanger}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatbox-ellipses" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="md-person-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Sign_in' component={Sign_in}/>
      <Stack.Screen name='Sign_up' component={Sign_up}/>
      <Stack.Screen name='Dashboard' component={RootHome}/>
      <Stack.Screen name='Search_board' component={Search_board}/>
      <Stack.Screen name='Search_utama' component={RootHome}/>
      <Stack.Screen name='Detail_page' component={Detail_page}/>
      <Stack.Screen name='Tambah_Hewan' component={Tambah_Hewan}/>
      <Stack.Screen name='Success_bar' component={Success_bar}/>
      <Stack.Screen name='Messanger' component={RootHome}/>
      <Stack.Screen name='Messanger1' component={Messanger1}/>
      <Stack.Screen name='Notifikasi' component={RootHome}/>
      <Stack.Screen name='User' component={RootHome}/>
      <Stack.Screen name='EditDetails' component={EditDetails}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App