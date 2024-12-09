import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainButton from '../components/buttons/MainButton';

const ResultReportScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* Header con título y subtítulo */}
      <View style={styles.header}>
        <Text style={styles.title}>Evaluación</Text>
        <Text style={styles.subtitle}>Maíz</Text>
      </View>

      {/* Reporte de diagnóstico */}
      <View style={styles.reportContainer}>
        <Text style={styles.reportText}>Reporte de diagnóstico</Text>
      </View>

      {/* Botón para salir */}
      <MainButton
        title="Salir"
        onPress={() => navigation.navigate('Home')} 
        variant="primary"
        style={styles.exitButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#007ACC',
  },
  reportContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  reportText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  exitButton: {
    marginTop: 20,
  },
});

export default ResultReportScreen;
