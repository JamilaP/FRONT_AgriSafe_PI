import React, { useState } from "react";
import { View, Text, Alert, Image } from "react-native";
import StepIndicatorComponent from "../components/pagination/StepIndicatorComponent";
import UploadButton from "../components/buttons/UploadButton";
import TakePhotoButton from "../components/buttons/TakePhotoButton";
import MainButton from "../components/buttons/MainButton";
import ImagePreview from "./ImagePreview";
import ModalInformation from "../components/Modals/ModalInformation";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./styles/UploadImagenScreenStyle";
import { uploadImageToOBS } from "../utils/uploadImage";

const UploadImagenScreen = ({ navigation }: { navigation: any }) => {
  const [images, setImages] = useState<string[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]); // URLs de imágenes subidas
  const [isModalVisible, setIsModalVisible] = useState(false);

  const labels = ["1", "2", "3"];

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
      handleImageSelection(uri);
    }
  };

  // Función para tomar una foto con la cámara
  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert(
        "Permiso denegado",
        "Se requiere permiso para acceder a la cámara"
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      handleImageSelection(result.assets[0].uri);
    }
  };

  // Subir imágenes a OBS usando la API REST
  const handleUploadToOBS = async () => {
    if (images.length === 0) {
      Alert.alert("Error", "No hay imágenes seleccionadas");
      return;
    }

    try {
      const uploadPromises = images.map(async (uri) => {
        const url = await uploadImageToOBS(uri); // Retorna el URL tras subir la imagen
        return url; // Guarda el URL devuelto
      });

      const urls = await Promise.all(uploadPromises); // Espera a que todas las imágenes se suban
      setUploadedUrls(urls); // Guarda los URLs en el estado
      Alert.alert("Éxito", "Todas las imágenes se han subido correctamente");

      // Redirigir a la siguiente pantalla con el primer URL
      navigation.navigate("RemoveBackground", {
        imageUri: images[0],
        imageUrl: urls[0],
      });
      setImages([]); // Limpiar el estado de imágenes después de subirlas
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al subir las imágenes");
      console.error(error);
    }
  };

  // Función para manejar el botón "Cancelar"
  const handleCancel = () => {
    setIsModalVisible(true);
  };

  // Confirmar la acción en el modal
  const handleConfirmCancel = () => {
    setIsModalVisible(false);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {/* Header con título y subtítulo */}
      <View style={styles.headerEvaluation}>
        <View style={styles.header}>
          <Text style={styles.title}>Evaluación</Text>
          <Text style={styles.subtitle}>Maíz</Text>
        </View>
        <Image
          source={require("@/assets/images/Plantas/Corn.webp")}
          style={styles.imageHeader}
        />
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
          onPress={handleCancel}
          variant="secondary"
          style={styles.cancelButton}
        />
        <MainButton
          title="Subir Imágenes"
          onPress={handleUploadToOBS}
          variant="primary"
        />
      </View>

      {/* Modal para confirmar salida */}
      <ModalInformation
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={handleConfirmCancel}
      />
    </View>
  );
};

export default UploadImagenScreen;
