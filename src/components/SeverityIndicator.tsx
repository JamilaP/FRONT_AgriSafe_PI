// src/components/SeverityIndicator.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeverityIndicator = () => {
  const data = [
    { grade: 0, range: '0%' },
    { grade: 1, range: '0 - 5%' },
    { grade: 2, range: '5 - 10%' },
    { grade: 3, range: '10 - 25%' },
    { grade: 4, range: '25 - 50%' },
    { grade: 5, range: '> 50%' },
  ];

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.grade} style={styles.item}>
          <Text style={styles.gradeText}>{item.grade}</Text>
          <Text style={styles.rangeText}>{item.range}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Color de fondo sutil
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  item: {
    alignItems: 'center',
  },
  gradeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0056b3', // Azul oscuro
  },
  rangeText: {
    fontSize: 14,
    color: '#0073e6', // Azul claro
  },
});

export default SeverityIndicator;
