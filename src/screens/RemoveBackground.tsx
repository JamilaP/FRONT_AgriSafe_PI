import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import StepIndicatorComponent from '../components/pagination/StepIndicatorComponent';
import MainButton from '../components/buttons/MainButton';

const RemoveBackground = ({ route, navigation }: { route: any; navigation: any }) => {
  const { imageUri, imageUrl } = route.params || {}; // Recibe ambos parámetros

  const labels = ['1', '2', '3', '4'];

  // Imprimir en consola los valores de imageUri e imageUrl
  console.log('imageUrl:', imageUrl);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Evaluación</Text>
        <Text style={styles.subtitle}>Maíz</Text>
      </View>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <StepIndicatorComponent currentPosition={1} labels={labels} />
      </View>

      {/* Texto de instrucción */}
      <Text style={styles.instruction}>Quita el fondo de las fotos</Text>

      {/* Imagen */}
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.noImageText}>No se seleccionó ninguna imagen</Text>
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
          onPress={() => navigation.navigate('ClassificationModelScreen', { imageUri, imageUrl })} // Pasar parámetros
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
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  noImageText: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
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

export default RemoveBackground;
