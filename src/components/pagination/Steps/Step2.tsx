import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Step2Styles from './styles/Step2styles';

const Step2 = () => {
  return (
    <View style={Step2Styles.container}>
      <Text style={Step2Styles.title}>Ejecutando clasificación</Text>
      <ActivityIndicator size="large" color="#00a8cc" />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Step2;
