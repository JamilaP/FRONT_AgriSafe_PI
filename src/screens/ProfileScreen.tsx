import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles/ProfileScreenStyle';
import { getUserProfile, updateUserProfile } from '../services/api';

// Función para convertir Base64 a Blob
const base64ToBlob = (base64, mimeType) => {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length).fill(null).map((_, i) => byteCharacters.charCodeAt(i));
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
};

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [profileImage, setProfileImage] = useState<{
    uri: string;
    type?: string;
    name?: string;
    base64?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  // Cargar el perfil del usuario al inicio
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile();
        console.log('Perfil del usuario:', response.data);
        const { name, email, profile_picture } = response.data;
        setUserName(name);
        setUserEmail(email);
        setProfileImage({ uri: profile_picture });
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el perfil:', error);
        Alert.alert('Error', 'No se pudo cargar el perfil.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00a8cc" />
      </View>
    );
  }

  // Cambiar imagen del perfil
  const handleChangeImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Se necesita permiso para acceder a la galería.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['image'], // Configuración moderna
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
      base64: true, // Habilita Base64 para manejar el caso de conversión
    });

    if (!result.canceled && result.assets[0]) {
      const { uri, base64 } = result.assets[0];
      setProfileImage({ uri, base64 });
    } else {
      console.error('El archivo seleccionado no es válido');
    }
  };

  // Cambiar estado entre edición y vista
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Guardar cambios en el perfil
  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userName);

      if (profileImage?.base64) {
        const mimeType = 'image/jpeg'; // Cambiar si es necesario
        const blob = base64ToBlob(profileImage.base64, mimeType);
        const imageObject = {
          uri: URL.createObjectURL(blob),
          type: mimeType,
          name: `profile.jpg`,
        };
        console.log('Image Object:', imageObject);
        formData.append('profile_picture', imageObject);
      } else if (profileImage?.uri) {
        const imageType = profileImage.uri.split('.').pop();
        const mimeType = `image/${imageType}`;
        const imageObject = {
          uri: profileImage.uri,
          type: mimeType,
          name: `profile.${imageType}`,
        };
        console.log('Image Object:', imageObject);
        formData.append('profile_picture', imageObject);
      }

      formData.forEach((value, key) => {
        console.log(key, value);
      });

      await updateUserProfile(formData);

      Alert.alert('Éxito', 'Perfil actualizado correctamente.');
      setIsEditing(false);
      console.log('Perfil actualizado correctamente.');
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      Alert.alert('Error', 'No se pudo actualizar el perfil.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagen del usuario */}
      <TouchableOpacity onPress={isEditing ? handleChangeImage : undefined}>
        <Image
          source={profileImage || require('../../assets/images/Profile.png')}
          style={styles.profileImage}
        />
      </TouchableOpacity>

      {/* Información del usuario */}
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
            placeholder="Nombre de usuario"
          />
          <Text style={styles.userEmail}>{userEmail}</Text>
        </>
      ) : (
        <>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </>
      )}

      {/* Botón para editar/guardar */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={isEditing ? handleSaveChanges : toggleEditMode}
      >
        <Text style={styles.actionButtonText}>
          {isEditing ? 'Guardar Cambios' : 'Editar Perfil'}
        </Text>
      </TouchableOpacity>

      {/* Botón para cerrar sesión */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => Alert.alert('Cerrar sesión', 'Sesion cerrada correctamente')}
      >
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
