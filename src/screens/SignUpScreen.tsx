import React from 'react';
import { View, Text, Alert } from 'react-native';
import SignUpForm from '../components/form/SignUpForm'; 
import MainButton from '../components/buttons/MainButton'; 
import { useNavigation } from '@react-navigation/native';
import { signInScreenstyles as styles } from './styles/SignInScreenStyle';
import { registerUser } from '../services/api';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = async (username: string, email: string, password: string) => {
    try {
      await registerUser({ name: username, email, password });
      Alert.alert('Registro exitoso', 'Ahora puedes iniciar sesión');
      navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión
    } catch (error) {
      Alert.alert(
        'Error al registrarse',
        error.response?.data?.error || 'Inténtalo de nuevo más tarde'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <SignUpForm onSubmit={handleSignUp} /> 
      <MainButton
        title="¿Ya tienes una cuenta? Inicia Sesión"
        style={styles.linkButton}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default SignUpScreen;
