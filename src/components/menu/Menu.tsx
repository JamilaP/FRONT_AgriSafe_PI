import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '@/src/screens/HomeScreen';
import DiagnosesScreen from '@/src/screens/DiagnosesScreen';
import ProfileScreen from '@/src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Inicio') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Diagnósticos') iconName = focused ? 'clipboard' : 'clipboard-outline';
          else if (route.name === 'Perfil') iconName = focused ? 'person' : 'person-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00a8cc',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f8f8f8',
          height: 60,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Diagnósticos" component={DiagnosesScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Menu;
