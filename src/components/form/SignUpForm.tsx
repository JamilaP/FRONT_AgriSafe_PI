import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/SignUpFormStyles'; // Importamos los estilos externos

interface SignUpFormProps {
  onSubmit?: (username: string, email: string, password: string) => void; // Función opcional para manejar el envío del formulario
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(username, email, password);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creación de cuenta</Text>

      {/* Campo de Nombre de Usuario */}
      <Text style={styles.label}>Nombre de usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        placeholderTextColor="#999"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      {/* Campo de Correo */}
      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
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
        placeholder="Contraseña"
        placeholderTextColor="#999"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Text style={styles.helperText}>Debe tener 8 dígitos como mínimo</Text>

      {/* Botón para enviar */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;
