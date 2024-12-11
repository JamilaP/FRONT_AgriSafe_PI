import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import StepIndicatorComponent from '../components/pagination/StepIndicatorComponent';
import MainButton from '../components/buttons/MainButton';

const SegmentationModelScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { imageUri, imageUrl } = route.params || {}; // Recibe ambos parámetros
  const labels = ['1', '2', '3'];
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setPercentage(70); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  // Imprimir en consola los valores de imageUri e imageUrl
  console.log('imageUrl:', imageUrl);

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

      {/* Loading o Resultado */}
      <View style={styles.resultContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#00a8cc" />
        ) : (
          <Text style={styles.percentage}>{percentage}%</Text>
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
            navigation.navigate('ResultReportScreen', { imageUri, imageUrl }) // Pasar parámetros
          }
          variant="primary"
          disabled={isLoading} 
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
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
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