import React from 'react';
import { View, Text, Button } from 'react-native';
import FlowCardStyles from './styles/FlowCardStyles';
import FlowStep from './FlowStep';


const FlowCard: React.FC = () => (
  <View style={FlowCardStyles.card}>
    <Text style={FlowCardStyles.title}>Flujo del diagnóstico</Text>
    <View style={FlowCardStyles.flowContainer}>
      {/* Paso 1 */}
      <FlowStep
        icon={require('@/src/assets/leaf-icon.png')}
        text="Tomar una foto"
      />
      <Text style={FlowCardStyles.arrow}>›</Text>
      {/* Paso 2 */}
      <FlowStep
        icon={require('@/src/assets/clock-icon.png')}
        text="Espera el diagnóstico"
      />
      <Text style={FlowCardStyles.arrow}>›</Text>
      {/* Paso 3 */}
      <FlowStep
        icon={require('@/src/assets/report-icon.png')}
        text="Revisar el reporte"
      />
    </View>
    <Button title="Comenzar diagnóstico" onPress={() => console.log('Iniciar diagnóstico')} />
  </View>
);

export default FlowCard;
