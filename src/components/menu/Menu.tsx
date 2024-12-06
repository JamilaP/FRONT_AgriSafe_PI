import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './Style/MenuStyles';

interface MenuProps {
  onNavigate: (screen: string) => void; // Función para manejar navegación
  activeTab: string; // Identifica cuál pestaña está activa
}

const Menu: React.FC<MenuProps> = ({ onNavigate, activeTab }) => {
  return (
    <View style={styles.container}>
      {/* Opción: Inicio */}
      <TouchableOpacity style={styles.item} onPress={() => onNavigate('Inicio')}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={[
            styles.icon,
            activeTab === 'Inicio' && styles.activeIcon, 
          ]}
        />
        <Text
          style={[
            styles.text,
            activeTab === 'Inicio' && styles.activeText, 
          ]}
        >
          Inicio
        </Text>
      </TouchableOpacity>

      {/* Opción: Diagnósticos */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => onNavigate('Diagnósticos')}
      >
        <Image
          source={require('@/assets/images/icon.png')}
          style={[
            styles.icon,
            activeTab === 'Diagnósticos' && styles.activeIcon,
          ]}
        />
        <Text
          style={[
            styles.text,
            activeTab === 'Diagnósticos' && styles.activeText,
          ]}
        >
          Diagnósticos
        </Text>
      </TouchableOpacity>

      {/* Opción: Perfil */}
      <TouchableOpacity style={styles.item} onPress={() => onNavigate('Perfil')}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={[
            styles.icon,
            activeTab === 'Perfil' && styles.activeIcon,
          ]}
        />
        <Text
          style={[
            styles.text,
            activeTab === 'Perfil' && styles.activeText,
          ]}
        >
          Perfil
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
