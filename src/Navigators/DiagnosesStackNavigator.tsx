import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiagnosesScreen from '../screens/DiagnosesScreen';

const Stack = createStackNavigator();

const DiagnosesStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Diagnoses" component={DiagnosesScreen} />
  </Stack.Navigator>
);

export default DiagnosesStackNavigator;
