import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import DiagnosesScreen from './src/screens/DiagnosesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import UploadImagenScreen from './src/screens/UploadImagenScren';
import MainLayout from './src/layout/MainLayout';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      {/* Pantalla inicial sin Header ni Menú */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      {/* Pantallas con Header y Menú */}
      <Stack.Screen name="Main">
        {() => (
          <MainLayout>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

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
          </MainLayout>
        )}
      </Stack.Screen>

      {/* Pantallas dinámicas específicas */}
      <Stack.Screen name="Upload">
        {() => (
          <MainLayout>
            <UploadImagenScreen />
          </MainLayout>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
