import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/menu/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Header global */}
      <Header />
      {/* Contenido dinámico */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default MainLayout;
