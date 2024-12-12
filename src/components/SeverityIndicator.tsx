// src/components/SeverityIndicator.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeverityIndicator = () => {
  const data = [
    { grade: 0, range: '0%' , color: '#649726'},
    { grade: 1, range: '0 - 5%', color: '#7FBE31' },
    { grade: 2, range: '5 - 10%', color: '#FBE36A' },
    { grade: 3, range: '10 - 25%', color: '#F99628' },
    { grade: 4, range: '25 - 50%', color: '#E36622' },
    { grade: 5, range: '> 50%', color: '#DC2D2D' },
  ];

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.grade} style={[styles.item, { backgroundColor: item.color }]}>
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
    borderRadius: 8,
    marginVertical: 10,
  },
  item: {
    alignItems: 'center',
    minWidth: 60,
  },
  gradeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  rangeText: {
    fontSize: 14,
    color: '#000',
  },
});

export default SeverityIndicator;
