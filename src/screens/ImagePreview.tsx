import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para el ícono de "X"

interface ImagePreviewProps {
  uri: string;
  onDelete: () => void;
}

const ImagePreview = ({ uri, onDelete }: ImagePreviewProps) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri }} style={styles.image} />
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Ionicons name="close-circle" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  deleteButton: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
});

export default ImagePreview;