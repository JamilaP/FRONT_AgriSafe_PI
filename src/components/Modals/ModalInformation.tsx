import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import MainButton from '../buttons/MainButton';
import { modalInformationStyles } from './styles/ModalInformationStyles';

type ModalInformationProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ModalInformation: React.FC<ModalInformationProps> = ({
  visible,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={modalInformationStyles.overlay}>
          <View style={modalInformationStyles.container}>
            <Text style={modalInformationStyles.message}>
              ¿Está seguro que desea salir del diagnóstico?
            </Text>
            <View style={modalInformationStyles.buttonContainer}>
              <MainButton
                title="Sí"
                variant="secondary"
                onPress={onConfirm}
                style={{ flex: 1, marginRight: 8 }} // Botón "Sí".
              />
              <MainButton
                title="No"
                variant="primary"
                onPress={onClose}
                style={{ flex: 1, marginLeft: 8 }} // Botón "No".
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalInformation;
