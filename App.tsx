import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator'; // Asegúrate de la ruta correcta
import MainLayout from './src/layout/MainLayout';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
  <AuthProvider > 
    <AppNavigator />
  </AuthProvider>
);
};

export default App;
