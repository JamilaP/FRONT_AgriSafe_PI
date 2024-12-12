import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import StepIndicatorComponent from '../components/pagination/StepIndicatorComponent';
import SeverityIndicator from '../components/SeverityIndicator';
import MainButton from '../components/buttons/MainButton';

// importar variables de entorno
import { LOCALHOST, OBS_ENDPOINT } from '@env';

const ClassificationModelScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  let { imageUri, imageUrl } = route.params || {}; // Recibe parámetros del paso anterior
  const [isLoading, setIsLoading] = useState(true); // Estado para la carga
  const [diagnosisResult, setDiagnosisResult] = useState<any>(null); // Datos del diagnóstico
  const [infection_percentage, setInfection_percentage] = useState<number>(0); // Porcentaje de infección
  const [severity, setSeverity] = useState<string>(''); // Grado de severidad
  const [disease_id, setDisease_id] = useState<number>(0); // Id de la enfermedad
  const labels = ['1', '2', '3'];

  // Llamar al API para crear un diagnóstico
  useEffect(() => {
    const createDiagnosis = async () => {
      try {
        setIsLoading(true); // Inicia la carga

        // Construir el URL de la imagen con los datos del .env
        const completeImageUrl = `${OBS_ENDPOINT}/${imageUrl}`;

        const diagnosisData = {
          user_id: 1, // Simulado
          plant_id: 1, // Simulado
          imageUrl: completeImageUrl, // URL de la imagen subida
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
          setDiagnosisResult(result); // Guarda el resultado completo
          setInfection_percentage(result.infection_percentage); // Guarda el porcentaje de infección
          setSeverity(result.background_removed_image); // string convertido a float
          setDisease_id(result.disease_id); // Guarda el id de la enfermedad

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
        <Text style={styles.title}>Diagnóstico</Text>
        <Text style={styles.subtitle}>Maíz</Text>
      </View>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <StepIndicatorComponent currentPosition={2} labels={labels} />
      </View>

      {/* Texto de instrucción */}
      <Text style={styles.instruction}>
        {isLoading ? 'Analizando la enfermedad de la roya...' : 'Resultado del análisis'}
      </Text>

      {/* Indicador de progreso */}
      <View style={styles.loaderContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#32CD32" />
        ) : disease_id === 1 ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>La hoja de la planta presenta la enfermedad de la roya.</Text>
            <Text style={styles.resultText}>
              Porcentaje afectado: {infection_percentage}%
            </Text>
            <Text style={styles.resultText}>Grado de Severidad:</Text>
            <SeverityIndicator />
          </View>
        ) : (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              Las hojas del maíz no presentan la enfermedad de la roya.
            </Text>
            <Image
              source={require('../../assets/images/Plantas/MaizSafe.webp')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
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
            navigation.navigate('ResultReportScreen', { imageUri, imageUrl })
          }
          variant="primary"
          disabled={isLoading || !diagnosisResult} // Desactivar si está cargando o no hay resultado
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
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
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
