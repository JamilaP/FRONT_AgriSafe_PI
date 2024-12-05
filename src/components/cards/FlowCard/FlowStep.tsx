import React from 'react';
import { View, Text, Image } from 'react-native';
import FlowStepStyles from './styles/FlowStepStyles';

interface FlowStepProps {
  icon: any; // Ruta del ícono (puedes tiparlo mejor según tu configuración)
  text: string;
}

const FlowStep: React.FC<FlowStepProps> = ({ icon, text }) => (
  <View style={FlowStepStyles.container}>
    <Image source={icon} style={FlowStepStyles.icon} />
    <Text style={FlowStepStyles.text}>{text}</Text>
  </View>
);

export default FlowStep;
