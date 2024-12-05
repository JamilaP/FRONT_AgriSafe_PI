import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/LoginFormStyles'; 

interface LoginFormProps {
  onForgotPassword?: () => void; 
  onSubmit?: (email: string, password: string) => void; 
}

const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (onSubmit) {
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
