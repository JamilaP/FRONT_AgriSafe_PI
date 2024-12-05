import { StyleSheet } from 'react-native';

export const mainButtonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#007B83',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100, // Ancho mínimo por defecto.
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007B83',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100, // Ancho mínimo por defecto.
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
    borderColor: '#CCCCCC',
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#007B83',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
