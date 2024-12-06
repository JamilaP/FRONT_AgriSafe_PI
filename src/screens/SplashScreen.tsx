import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    // Navega automáticamente después de 3 segundos
    const timeout = setTimeout(() => {
      navigation.replace('Main'); // Navega a las pestañas principales
    }, 3000);

    return () => clearTimeout(timeout); // Limpia el temporizador al desmontar
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AgriSafe</Text>
      <Text style={styles.subtitle}>Tu aliado para proteger tus cultivos</Text>
      <ActivityIndicator size="large" color="#00a8cc" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00a8cc',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});

export default SplashScreen;
