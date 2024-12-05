import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles/InformationCardsStyles';

interface InformationCardProps {
  title: string;
  description: string;
  imageSource: string;
}

const InformationCard: React.FC<InformationCardProps> = ({ title, description, imageSource }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default InformationCard;