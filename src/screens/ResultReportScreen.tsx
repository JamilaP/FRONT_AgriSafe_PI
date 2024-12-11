import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MainButton from '../components/buttons/MainButton';

const ResultReportScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { imageUri, infectionPercentage } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Header con título y subtítulo */}
      <View style={styles.header}>
        <Text style={styles.title}>Resultado del Diagnóstico</Text>
        <Text style={styles.subtitle}>Maíz</Text>
      </View>

      {/* Imagen de la planta analizada */}
      <View style={styles.imageContainer}>
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
      </View>

      {/* Reporte de diagnóstico */}
      <View style={styles.reportContainer}>
        <Text style={styles.reportTitle}>Reporte:</Text>
        <Text style={styles.reportText}>
          Diagnóstico: <Text style={styles.highlight}>Roya Común Detectada</Text>
        </Text>
        <Text style={styles.reportText}>
          Porcentaje de Infección: <Text style={styles.highlight}>{infectionPercentage}%</Text>
        </Text>
      </View>

      {/* Botón para salir */}
      <MainButton
        title="Volver al Inicio"
        onPress={() => navigation.navigate('Home')} // Navega al inicio
        variant="primary"
        style={styles.exitButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
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
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  reportContainer: {
    backgroundColor: '#F8F8F8',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  reportTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  reportText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  exitButton: {
    marginTop: 20,
  },
});

export default ResultReportScreen;
