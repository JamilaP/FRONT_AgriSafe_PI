import React from 'react';
import { View, Text } from 'react-native';
import FlowCard from '../components/cards/FlowCard/FlowCard';
import InformationCard from '../components/cards/InformationCards';
import { homeScreenStyles as styles } from './styles/HomeScreenStyle';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Sección: Selección de plantas */}
      <Text style={styles.sectionTitle}>Selección de plantas</Text>
      <InformationCard
        title="Maíz"
        description="Protege tu cultivo de maíz con nuestras herramientas."
        imageSource="icon.png"
      />

      {/* Sección: Flujo del diagnóstico */}
      <Text style={styles.sectionTitle}>Flujo del diagnóstico</Text>
      <FlowCard onPress={() => console.log('Iniciar diagnóstico')} />

      {/* Sección: Enfermedades */}
      <Text style={styles.sectionTitle}>Enfermedades</Text>
      <InformationCard
        title="Roya"
        description="Causada por el hongo Puccinia polysora, usualmente en las etapas posteriores de crecimiento, en áreas tropicales."
        imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Maize_leaf_blight.JPG/640px-Maize_leaf_blight.JPG"
      />
    </View>
  );
};

export default HomeScreen;
