import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator'; // Asegúrate de la ruta correcta
import MainLayout from './src/layout/MainLayout';

const App = () => {
  return <AppNavigator />;
};

export default App;
