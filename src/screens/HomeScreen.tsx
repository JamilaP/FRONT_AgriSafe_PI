import React from 'react';
import { View, Text } from 'react-native';
import FlowCard from '../components/cards/FlowCard/FlowCard';
import PlantCard from '../components/cards/PlantCard'; // Importa el nuevo componente
import InformationCard from '../components/cards/InformationCards';
import { homeScreenStyles as styles } from './styles/HomeScreenStyle';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Sección: Selección de plantas */}
      <Text style={styles.sectionTitle}>Selección de plantas</Text>
      <PlantCard
        imageSource={require('@/assets/images/Plantas/Corn.webp')} // Ruta correcta al ícono de maíz.
        title="Maíz"
      />

      {/* Sección: Flujo del diagnóstico */}
      <Text style={styles.sectionTitle}>Flujo del diagnóstico</Text>
      <FlowCard onPress={() => navigation.navigate('Upload')} />

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
