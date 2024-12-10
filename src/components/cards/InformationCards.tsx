import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/InformationCardsStyles';

interface InformationCardProps {
  title: string;
  description: string;
  imageSource: string;
  onPress?: () => void; // Prop opcional para manejar el evento onPress
}

const InformationCard: React.FC<InformationCardProps> = ({ title, description, imageSource, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InformationCard;
