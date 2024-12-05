import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/UploadButtonStyles';

interface UploadButtonProps {
  title: string;
  onPress: () => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name="cloud-upload-outline" size={36} color="#007ACC" />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default UploadButton;
