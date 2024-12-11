import React, { useContext } from 'react';
import { View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage
import LoginForm from '../components/form/LoginForm';
import MainButton from '../components/buttons/MainButton';
import { logInStyles as styles } from './styles/LogInScreenStyle';
import { loginUser } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const { login } = useContext(AuthContext);
  
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await loginUser({ email, password });
      const { token } = response.data;
      // Guarda el token en AsyncStorage
      await AsyncStorage.setItem('token', token);
      login(token);
      Alert.alert('Inicio de sesión exitoso', 'Bienvenido a la aplicación');
      // Navega a la pantalla principal
      navigation.navigate('Home');
      console.log('Inicio de sesión exitoso');
    } catch (error) {
      Alert.alert(
        'Error al iniciar sesión',
        error.response?.data?.error || 'Verifica tus credenciales e intenta nuevamente'
      );
    }
  };

  const handleForgotPassword = () => {
    console.log('Olvidé mi contraseña');
    // Aquí podrías redirigir al usuario a una pantalla de recuperación de contraseña.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <LoginForm onSubmit={handleLogin} onForgotPassword={handleForgotPassword} />
      <MainButton
        title="¿No tienes una cuenta? Regístrate"
        onPress={() => navigation.navigate('SignUp')}
        variant="secondary"
        style={styles.linkButton}
      />
    </View>
  );
};

export default LoginScreen;
