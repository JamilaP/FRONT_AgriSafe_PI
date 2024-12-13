import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import FlowCard from '../components/cards/FlowCard/FlowCard';
import PlantCard from '../components/cards/PlantCard';
import InformationCard from '../components/cards/InformationCards';
import { homeScreenStyles as styles } from './styles/HomeScreenStyle';
import { useNavigation } from '@react-navigation/native';
import { getDiseaseById, getDiseases } from '../services/api';
import { Disease } from '../types/StepIndicatorProps';
import DiseaseModal from '../components/Modals/ModalDisease';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const diseaseImages = {
    Blight: require('../../assets/images/Diseases/Blight.jpeg'),
    CommonRust: require('../../assets/images/Diseases/CommonRust.jpeg'),
    GrayLeafSpot: require('../../assets/images/Diseases/GrayLeafSpot.jpg'),
    Healthy: require('../../assets/images/Diseases/Healthy.jpeg'),
  };
  

  // Obtener enfermedades de la API
  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const response = await getDiseases();
        setDiseases(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las enfermedades:', error);
        setLoading(false);
      }
    };

    fetchDiseases();
  }, []);

  const handleDiseaseSelect = async (id: number) => {
    try {
      setLoading(true);
      const response = await getDiseaseById(id); 
      setSelectedDisease(response.data); 
      setModalVisible(true); 
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener la enfermedad:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00a8cc" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Sección: Selección de plantas */}
      <Text style={styles.sectionTitle}>Selección de plantas</Text>
      <PlantCard
        imageSource={require('@/assets/images/Plantas/Corn.webp')} 
        title="Maíz"
      />

      {/* Sección: Flujo del diagnóstico */}
      <Text style={styles.sectionTitle}>Flujo del diagnóstico</Text>
      <FlowCard onPress={() => navigation.navigate('Upload')} />

      {/* Sección: Enfermedades */}
      <Text style={styles.sectionTitle}>Enfermedades</Text>
      <FlatList
        data={diseases}
        keyExtractor={(item) => item.disease_id.toString()} // Cambia esto si tu API usa otro identificador
        renderItem={({ item }) => (
          <InformationCard
            title={item.name}
            description={item.description}
            imageSource={
              diseaseImages[item.name] || require('../../assets/images/diseases.jpeg') // Imagen por defecto si no se encuentra
            }
            onPress={() => handleDiseaseSelect(item.disease_id)}
          />
        )}
      />
      {/* Componente Modal */}
      
      <DiseaseModal
        visible={isModalVisible}
        disease={selectedDisease}
        onClose={() => {
          setModalVisible(false);
          setSelectedDisease(null); 
        }}
      />

    </View>
  );
};

export default HomeScreen;
