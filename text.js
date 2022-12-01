import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Welcome_BoardScreen from './src/screens/Welcome_Board'
import Login_PageScreen from './src/screens/Login_Page'
import Registration_PageScreen from './src/screens/Registration_Page'
import DashboardScreen from './src/screens/Dashboard'
import Search_BarScreen from './src/screens/Search_Bar'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#f2ed46',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recomended"
        component={Recomended}
        options={{
          tabBarLabel: 'Recomended',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
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
        <Stack.Screen name='Welcome_BoardScreen' component={Welcome_BoardScreen} />
        <Stack.Screen name='Login_PageScreen' component={Login_PageScreen} />
        <Stack.Screen name='Registration_PageScreen' component={Registration_PageScreen} />
        <Stack.Screen name='DashboardScreen' component={DashboardScreen} />
        <Stack.Screen name='Search_BarScreen' component={Search_BarScreen} />
        <Stack.Screen name='Homepage' component={RootHome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
