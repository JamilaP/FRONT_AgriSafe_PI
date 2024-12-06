import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import InformationCard from '../components/cards/InformationCards';
import { diagnosesScreenStyles as styles } from './styles/DiagnosesScreenStyle';

const evaluations = [
  {
    id: 1,
    title: 'Evaluación - Cultivo #1',
    description: 'Enfermedad: Roya\nGrado de severidad: 3\nFecha: 20-11-24',
    imageSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Maize_leaf_blight.JPG/640px-Maize_leaf_blight.JPG',
  },
  {
    id: 2,
    title: 'Evaluación - Cultivo #2',
    description: 'Enfermedad: Roya\nGrado de severidad: 2\nFecha: 18-11-24',
    imageSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Maize_leaf_blight.JPG/640px-Maize_leaf_blight.JPG',
  },
  {
    id: 3,
    title: 'Evaluación - Cultivo #3',
    description: 'Enfermedad: No presenta\nGrado de severidad: 0\nFecha: 16-11-24',
    imageSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Maize_leaf_blight.JPG/640px-Maize_leaf_blight.JPG',
  },
];

const DiagnosesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <Text style={styles.title}>Histórico de evaluaciones</Text>

      {/* Ícono representativo */}
      <View style={styles.iconContainer}>
        <InformationCard
          title="Maíz"
          description="Protege tu cultivo de maíz con nuestras herramientas."
          imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Maize_leaf_blight.JPG/640px-Maize_leaf_blight.JPG"
        />
      </View>

      {/* Historial de evaluaciones */}
      {evaluations.map((evaluation) => (
        <View key={evaluation.id} style={styles.evaluationContainer}>
          <InformationCard
            title={evaluation.title}
            description={evaluation.description}
            imageSource={evaluation.imageSource}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default DiagnosesScreen;
