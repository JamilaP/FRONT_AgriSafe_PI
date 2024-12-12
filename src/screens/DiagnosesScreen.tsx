import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Alert } from 'react-native';
import InformationCard from '../components/cards/InformationCards';
import DiagnosisModal from '../components/Modals/ModalDiagnosis';
import { diagnosesScreenStyles as styles } from './styles/DiagnosesScreenStyle';
import { getDiagnosesByUserId, getDiagnosisById } from '../services/api';

interface Diagnosis {
  diagnosis_id: number;
  disease_name: string | null;
  infection_percentage: number;
  created_at: string;
  image: string | null;
}

const DiagnosesScreen = () => {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState(null); // Estado para el diagnóstico seleccionado
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchDiagnoses = async () => {
      try {
        const userId = 1; // Cambia esto según tu lógica
        const response = await getDiagnosesByUserId(userId);
        //console.log('Diagnósticos:', response.data);
        setDiagnoses(response.data);
      } catch (error) {
        console.error('Error al obtener los diagnósticos:', error);
        Alert.alert('Error', 'No se pudo cargar el historial de diagnósticos.');
      } finally {
        setLoading(false);
      }
    };

    fetchDiagnoses();
  }, []);

  const handleDiagnosisSelect = async (diagnosisId) => {
    try {
      setLoading(true); // Muestra el indicador de carga
      const response = await getDiagnosisById(diagnosisId); // Llama a la API
      setSelectedDiagnosis(response.data[0]); // Establece el diagnóstico en el estado
      setModalVisible(true); // Muestra el modal
    } catch (error) {
      console.error('Error al obtener el diagnóstico:', error);
      Alert.alert('Error', 'No se pudo cargar los detalles del diagnóstico.');
    } finally {
      setLoading(false); // Oculta el indicador de carga
    }
  };
  

  const handleModalClose = () => {
    setModalVisible(false); // Oculta el modal
    setSelectedDiagnosis(null); // Limpia el diagnóstico seleccionado
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#00a8cc" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de evaluaciones</Text>
      <FlatList
        data={diagnoses}
        keyExtractor={(item) => item.diagnosis_id.toString()}
        renderItem={({ item }) => (
          <InformationCard
            title={`Diagnóstico ${item.diagnosis_id}`}
            description={`Enfermedad: ${item.disease_name || 'No detectada'}\nPorcentaje de infección: ${item.infection_percentage}%`}
            imageSource={
              item.image ||
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Maize_leaf_blight.JPG/640px-Maize_leaf_blight.JPG'
            }
            onPress={() => handleDiagnosisSelect(item.diagnosis_id)}
          />
        )}
      />
      <DiagnosisModal
        visible={isModalVisible}
        diagnosis={selectedDiagnosis}
        onClose={handleModalClose}
      />
    </View>
  );
};

export default DiagnosesScreen;
