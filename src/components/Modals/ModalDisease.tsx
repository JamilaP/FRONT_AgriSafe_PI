import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {styles} from './styles/ModalDiseaseStyles';

const DiseaseModal = ({ visible, disease, onClose }: any) => {
  if (!disease) return null; 

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{disease.name}</Text>
          <Text style={styles.modalText}>{disease.description}</Text>
          <Text style={styles.modalText}>
            <Text style={styles.boldText}>Síntomas: </Text>
            {disease.symptoms}
          </Text>
          <Text style={styles.modalText}>
            <Text style={styles.boldText}>Prevención: </Text>
            {disease.prevention}
          </Text>
          <Text style={styles.modalText}>
            <Text style={styles.boldText}>Tratamiento: </Text>
            {disease.treatment}
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DiseaseModal;
