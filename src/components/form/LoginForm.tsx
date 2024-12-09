import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles/LoginFormStyles'; 

interface LoginFormProps {
  onForgotPassword?: () => void; 
  onSubmit?: (email: string, password: string) => void; 
}

const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validación del correo
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    let valid = true;

    // Validar correo
    if (!email) {
      setEmailError('El correo es obligatorio.');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Ingrese un correo válido.');
      valid = false;
    } else {
      setEmailError('');
    }

    // Validar contraseña
    if (!password) {
      setPasswordError('La contraseña es obligatoria.');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
      valid = false;
    } else {
      setPasswordError('');
    }

    // Llama al `onSubmit`
    if (valid && onSubmit) {
      onSubmit(email, password);
    }
  };

  return (
    <View style={styles.container}>
      {/* Campo de Correo */}
      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo"
        placeholderTextColor="#999"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      {/* Campo de Contraseña */}
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su contraseña"
        placeholderTextColor="#999"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      {/* Enlace para "Olvidé mi contraseña" */}
      <TouchableOpacity onPress={onForgotPassword}>
        <Text style={styles.forgotPassword}>Olvidé mi contraseña</Text>
      </TouchableOpacity>

      {/* Botón para enviar */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
