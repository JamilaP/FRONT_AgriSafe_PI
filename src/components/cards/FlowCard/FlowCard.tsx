import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FlowCardStyles from './styles/FlowCardStyles';
import FlowStep from './FlowStep';

interface FlowCardProps {
  onPress: (screen: string) => void; // Navegación
}

const FlowCard: React.FC<FlowCardProps> = ({ onPress  }) => (
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
    
    <TouchableOpacity style={FlowCardStyles.button} onPress={() => onPress('Upload')}>
      <Text style={FlowCardStyles.buttonText}>Comenzar diagnóstico</Text>
    </TouchableOpacity>
  </View>
);

export default FlowCard;
