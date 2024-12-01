import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Step1Styles from './styles/Step1styles';

const Step1 = () => {
  return (
    <View style={Step1Styles.container}>
      <Text style={Step1Styles.title}>Quita el fondo de las fotos</Text>
      <Image
        source={{ uri: 'https://example.com/leaf-image.jpg' }}
        style={Step1Styles.image}
      />
    </View>
  );
};


export default Step1;
