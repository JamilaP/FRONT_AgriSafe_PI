import React from 'react';
import { View, Text, Button } from 'react-native';
import FlowCardStyles from './styles/FlowCardStyles';
import FlowStep from './FlowStep';


interface FlowCardProps {
  onPress: () => void; // Asegura que sea una función
}

const FlowCard: React.FC<FlowCardProps > = ({ onPress }) => (
  <View style={FlowCardStyles.card}>
    <View style={FlowCardStyles.flowContainer}>
      {/* Paso 1 */}
      <FlowStep
        icon={require('@/assets/images/adaptive-icon.png')}
        text="Tomar una foto"
      />
      <Text style={FlowCardStyles.arrow}>›</Text>
      {/* Paso 2 */}
      <FlowStep
        icon={require('@/assets/images/react-logo.png')}
        text="Espera el diagnóstico"
      />
      <Text style={FlowCardStyles.arrow}>›</Text>
      {/* Paso 3 */}
      <FlowStep
        icon={require('@/assets/images/icon.png')}
        text="Revisar el reporte"
      />
    </View>
    <Button title="Comenzar diagnóstico" onPress={onPress} />
  </View>
);

export default FlowCard;
