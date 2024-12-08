import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StepIndicatorComponent from '../components/pagination/StepIndicatorComponent';
import UploadButton from '../components/buttons/UploadButton';
import TakePhotoButton from '../components/buttons/TakePhotoButton';
import MainButton from '../components/buttons/MainButton';

const UploadImagenScreen = ({ navigation }: { navigation: any }) => {
  const labels = ['1', '2', '3', '4'];

  return (
    <View style={styles.container}>
      {/* Header con título y subtítulo */}
      <View style={styles.header}>
        <Text style={styles.title}>Evaluación</Text>
        <Text style={styles.subtitle}>Maíz</Text>
      </View>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <StepIndicatorComponent currentPosition={0} labels={labels} />
      </View>

      {/* Texto de instrucción */}
      <Text style={styles.instruction}>Añade fotos de la planta</Text>

      {/* Botones de acción */}
      <View style={styles.buttonContainer}>
        <UploadButton title="Cargar fotos" onPress={() => console.log('Cargar fotos')} />
        <TakePhotoButton title="Tomar fotos" onPress={() => console.log('Tomar fotos')} />
      </View>

      {/* Botones inferiores */}
      <View style={styles.footerButtons}>
        <MainButton
          title="Cancelar"
          onPress={() => console.log('Cancelar')}
          variant="secondary"
          style={styles.cancelButton}
        />
        <MainButton
          title="Siguiente"
          onPress={() => navigation.navigate('RemoveBackground')} // Cambia a RemoveBackground
          variant="primary"
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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

export default UploadImagenScreen;
