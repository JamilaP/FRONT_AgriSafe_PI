import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles/ProfileScreenStyle';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('Nombre del Usuario');
  const [userEmail] = useState('usuario@correo.com');
  const [profileImage, setProfileImage] = useState(
    require('../../assets/images/Profile.png')
  );

  const handleChangeImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Se necesita permiso para acceder a la galería.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri });
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    alert('Cambios guardados correctamente');
    setIsEditing(false);
  };

  const handleLogout = () => {
    Alert.alert(
      'Cerrar sesión',
      'Sesion cerrada correctamente',
    );
  };

  return (
    <View style={styles.container}>
      {/* Imagen del usuario */}
      <TouchableOpacity onPress={isEditing ? handleChangeImage : undefined}>
        <Image
          source={profileImage}
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
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ProfileScreen;
