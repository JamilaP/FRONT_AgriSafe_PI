import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#888', // Color de ícono inactivo
  },
  activeIcon: {
    tintColor: '#00a8cc', // Color del ícono activo
  },
  text: {
    fontSize: 12,
    color: '#888', // Color de texto inactivo
  },
  activeText: {
    color: '#00a8cc', // Color de texto activo
    fontWeight: 'bold',
  },
});

export default styles;
