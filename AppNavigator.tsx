import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from './src/Navigators/HomeStackNavigator';
import DiagnosesStackNavigator from './src/Navigators/DiagnosesStackNavigator';
import ProfileStackNavigator from './src/Navigators/ProfileStackNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Diagnósticos') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00a8cc',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#f8f8f8', height: 60, paddingBottom: 5 },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeStackNavigator} />
      <Tab.Screen name="Diagnósticos" component={DiagnosesStackNavigator} />
      <Tab.Screen name="Perfil" component={ProfileStackNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
