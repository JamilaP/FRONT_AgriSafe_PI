import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import StepIndicatorComponent from '../components/pagination/StepIndicatorComponent';
import MainButton from '../components/buttons/MainButton';

// importar variables de entorno
import { LOCALHOST, OBS_ENDPOINT } from '@env';

const ClassificationModelScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  let { imageUri, imageUrl } = route.params || {}; // Recibe parámetros del paso anterior
  const [isLoading, setIsLoading] = useState(true); // Estado para la carga
  const [diagnosisId, setDiagnosisId] = useState<number | null>(null); // ID del diagnóstico creado

  const labels = ['1', '2', '3', '4'];

  // Llamar al API para crear un diagnóstico
  useEffect(() => {
    const createDiagnosis = async () => {
      try {
        setIsLoading(true); // Inicia la carga

        // Contruir el URL object de imageUrl con los datos del .env
        imageUrl = `${OBS_ENDPOINT}/${imageUrl}`;

        // Datos simulados para diagnóstico (puedes adaptarlos)
        const diagnosisData = {
          user_id: 1, // Simulado
          plant_id: 1, // Simulado
          imageUrl: imageUrl, // URL de la imagen subida
        };

        console.log('Diagnosis data:', diagnosisData);

        const response = await fetch(`${LOCALHOST}/diagnoses`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(diagnosisData),
        });

        const result = await response.json();

        if (response.ok) {
          setDiagnosisId(result.id); // Guarda el ID del diagnóstico creado
          Alert.alert('Éxito', 'Diagnóstico creado exitosamente.');
        } else {
          console.error('Error al crear diagnóstico:', result);
          Alert.alert('Error', 'Hubo un problema al crear el diagnóstico.');
        }
      } catch (error) {
        console.error('Error al llamar al API:', error);
        Alert.alert('Error', 'Hubo un problema con el servidor.');
      } finally {
        setIsLoading(false); // Finaliza la carga
      }
    };

    createDiagnosis();
  }, [imageUrl]); // Se ejecuta al cargar y al cambiar la URL de la imagen

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

      {/* Mostrar información adicional */}
      {!isLoading && diagnosisId && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>ID del diagnóstico creado: {diagnosisId}</Text>
          <Text style={styles.infoText}>URL de la imagen: {imageUrl}</Text>
        </View>
      )}

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
            navigation.navigate('SegmentationModelScreen', { imageUri, imageUrl, diagnosisId }) // Pasar ID del diagnóstico
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
  loaderContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
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
