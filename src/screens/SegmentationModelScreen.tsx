import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import StepIndicatorComponent from '../components/pagination/StepIndicatorComponent';
import MainButton from '../components/buttons/MainButton';

const SegmentationModelScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { imageUri } = route.params || {};
  const labels = ['1', '2', '3', '4'];
  const [isLoading, setIsLoading] = useState(true); // Estado para la carga
  const [infectionPercentage, setInfectionPercentage] = useState<number | null>(null); // Porcentaje de infección

  useEffect(() => {
    // Simula la detección del porcentaje de infección
    const simulateSegmentation = setTimeout(() => {
      setInfectionPercentage(50); // Porcentaje simulado
      setIsLoading(false); // Finaliza la carga
    }, 3000); // Tiempo de espera simulado

    return () => clearTimeout(simulateSegmentation); // Limpia el temporizador
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
        <StepIndicatorComponent currentPosition={3} labels={labels} />
      </View>

      {/* Texto de instrucción */}
      <Text style={styles.instruction}>Detectando porcentaje de infección</Text>

      {/* Indicador de carga o porcentaje */}
      <View style={styles.resultContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#00a8cc" />
        ) : (
          <Text style={styles.percentage}>Porcentaje de infección: {infectionPercentage}%</Text>
        )}
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
          onPress={() =>
            navigation.navigate('ResultReportScreen', { imageUri, infectionPercentage })
          }
          variant="primary"
          disabled={isLoading} // Deshabilita el botón si está cargando
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
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#32CD32',
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

export default SegmentationModelScreen;
