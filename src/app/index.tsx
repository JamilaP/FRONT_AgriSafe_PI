import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MainButton from '../components/buttons/MainButton';
import UploadButton from '../components/buttons/UploadButton';
import TakePhotoButton from '../components/buttons/TakePhotoButton';
import ModalInformation from '../components/Modals/ModalInformation';
import MainStepScreen from '../screens/MainStepScreen';
import FlowCard from '../components/cards/FlowCard/FlowCard';
import Menu from '../components/menu/Menu';
import LoginForm from '../components/form/LoginForm';
import SignUpForm from '../components/form/SignUpForm';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Inicio');
  const handleNavigate = () => {
    console.log('Navigate to next screen');
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);
  const handleConfirmModal = () => {
    console.log('Confirmado');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo</Text>
      {/*<MainStepScreen />*/}
      {/*<FlowCard onPress={handleNavigate}/>*/}
      {/*<Menu activeTab={activeTab} onNavigate={handleNavigate} />*/}
      {/*<LoginForm />*/}
      <SignUpForm />
    
      <View style={styles.buttonContainer}>
        <MainButton title="Siguiente" onPress={() => console.log('Siguiente')} variant="primary" />
        <MainButton title="Cancelar" onPress={handleOpenModal} variant="secondary" />
      </View>
      <View style={styles.actionContainer}>
        <UploadButton title="Cargar fotos" onPress={() => console.log('Cargar fotos')} />
        <TakePhotoButton title="Tomar fotos" onPress={() => console.log('Tomar fotos')} />
      </View>
      <ModalInformation
        visible={isModalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginTop: 24,
  },
});
