import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/TakePhotoButtonStyles';

interface TakePhotoButtonProps {
  title: string;
  onPress: () => void;
}

const TakePhotoButton: React.FC<TakePhotoButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name="camera-outline" size={36} color="#FFFFFF" />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TakePhotoButton;
