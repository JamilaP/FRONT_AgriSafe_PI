import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StepIndicatorComponent from '../components/pagination/StepIndicatorComponent';
import UploadButton from '../components/buttons/UploadButton';
import TakePhotoButton from '../components/buttons/TakePhotoButton';
import MainButton from '../components/buttons/MainButton';
import * as ImagePicker from 'expo-image-picker';
import ImagePreview from './ImagePreview';

const UploadImagenScreen = ({ navigation }: { navigation: any }) => {
  const [images, setImages] = useState<string[]>([]);

  const labels = ['1', '2', '3', '4'];

  const handleImageSelection = (uri: string) => {
    setImages((prevImages) => [...prevImages, uri]);
  };
  

  // Función para cargar fotos desde la galería
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, 
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      handleImageSelection(uri); // Añade la URI al estado
    }
  };

  // Función para tomar una foto con la cámara
  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert('Se requiere permiso para acceder a la cámara');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prevImages) => [...prevImages, result.assets[0].uri]);
    }
  };

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
        <UploadButton title="Cargar fotos" onPress={pickImage} />
        <TakePhotoButton title="Tomar fotos" onPress={takePhoto} />
      </View>

      {/* Vista previa de las imágenes seleccionadas */}
      <View style={styles.imagesContainer}>
        {images.map((uri, index) => (
          <ImagePreview
            key={index}
            uri={uri}
            onDelete={() => {
              const updatedImages = images.filter((_, i) => i !== index);
              setImages(updatedImages);
            }}
          />
      ))}
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
          onPress={() => {
            console.log('Estado de imágenes:', images);
            if (images.length > 0) {
              navigation.navigate('RemoveBackground', { imageUri: images[0] });
            } else {
              console.log('No hay imágenes seleccionadas');
            }
          }}
          
          variant="primary"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
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
  previewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  previewImage: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
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
