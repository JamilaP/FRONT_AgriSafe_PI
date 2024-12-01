import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import StepIndicatorComponent from '../components/pagination/StepIndicatorComponent';
import Step1 from '../components/pagination/Steps/Step1';
import Step2 from '../components/pagination/Steps/Step2';
import MainStepScreenStyles from './styles/MainStepScreemStyles';



const MainStepScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const labels = ["Paso 1", "Paso 2", "Paso 3", "Paso 4"];

  const renderStepContent = () => {
    switch (currentPosition) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step1 />;
      case 3:
        return <Step2 />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentPosition < labels.length - 1) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  return (
    <View style={MainStepScreenStyles.container}>
      {/* Indicador de pasos */}
      <StepIndicatorComponent currentPosition={currentPosition} labels={labels} />

      {/* Contenido dinámico */}
      <View style={MainStepScreenStyles.stepContent}>{renderStepContent()}</View>

      {/* Botones de navegación */}
      <View style={MainStepScreenStyles.buttonContainer}>
        <Button title="Anterior" onPress={handlePrevious} disabled={currentPosition === 0} />
        <Button title="Siguiente" onPress={handleNext} disabled={currentPosition === labels.length - 1} />
      </View>
    </View>
  );
};

export default MainStepScreen;
