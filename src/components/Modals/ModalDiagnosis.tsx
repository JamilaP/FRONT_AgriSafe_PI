import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { diagnosisModalStyles as styles } from './styles/ModalDiagnosisStyles';

interface DiagnosisModalProps {
  visible: boolean;
  diagnosis: {
    diagnosis_id: number;
    disease_name: string;
    infection_percentage: number;
    created_at: string;
    image: string;
  } | null;
  onClose: () => void;
}

const DiagnosisModal: React.FC<DiagnosisModalProps> = ({ visible, diagnosis, onClose }) => {
  if (!diagnosis) return null;

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Diagnóstico {diagnosis.diagnosis_id}</Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Enfermedad: </Text>
            {diagnosis.disease_name || 'No detectada'}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Porcentaje de infección: </Text>
            {diagnosis.infection_percentage}%
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Fecha: </Text>
            {new Date(diagnosis.created_at).toLocaleDateString()}
          </Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DiagnosisModal;
