import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PlantCardProps {
  imageSource: any; // Fuente de la imagen
  title: string; // Título de la planta
}

const PlantCard: React.FC<PlantCardProps> = ({ title, imageSource }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100, // Ajusta según el diseño que desees
    alignItems: 'center', // Centra la imagen y el texto horizontalmente
    marginVertical: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#00a8cc',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Centra el texto dentro del contenedor
  },
});


export default PlantCard;
