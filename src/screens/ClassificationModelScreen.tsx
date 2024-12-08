import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import StepIndicatorComponent from '../components/pagination/StepIndicatorComponent';
import MainButton from '../components/buttons/MainButton';

const ClassificationModelScreen = ({ navigation }: { navigation: any }) => {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga
  const labels = ['1', '2', '3', '4'];

  // Efecto para simular la carga por 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Habilitar el botón después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);

  return (
    <View style={styles.container}>
      {/* Header con título y subtítulo */}
      <View style={styles.header}>
        <Text style={styles.title}>Evaluación</Text>
        <Text style={styles.subtitle}>Maíz</Text>
      </View>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <StepIndicatorComponent currentPosition={2} labels={labels} />
      </View>

      {/* Texto de instrucción */}
      <Text style={styles.instruction}>Ejecutando clasificación</Text>

      {/* Indicador de progreso */}
      <View style={styles.loaderContainer}>
        {isLoading && <ActivityIndicator size="large" color="#32CD32" />}
      </View>

      {/* Botones inferiores */}
      <View style={styles.footerButtons}>
        <MainButton
          title="Cancelar"
          onPress={() => navigation.goBack()}
          variant="secondary"
          style={styles.cancelButton}
        />
        <MainButton
          title="Siguiente"
          onPress={() => navigation.navigate('SegmentationModelScreen')} // Navega a la siguiente pantalla
          variant="primary"
          disabled={isLoading} // El botón se habilita cuando `isLoading` es falso
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#007ACC',
  },
  stepIndicator: {
    marginVertical: 20,
  },
  instruction: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  loaderContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  cancelButton: {
    marginRight: 10,
  },
});

export default ClassificationModelScreen;
