import { StyleSheet } from 'react-native';

export const diagnosesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9', // Fondo claro para la pantalla
    padding: 16, // Espaciado alrededor del contenido
    paddingTop: 70,
  },
  title: {
    fontSize: 20, // Tamaño de fuente para el título
    fontWeight: 'bold', // Texto en negrita
    color: '#333333', // Color oscuro para el texto
    marginBottom: 16, // Separación inferior del título
  },
  loaderContainer: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: '#FFFFFF', // Fondo blanco mientras carga
  },
  evaluationContainer: {
    marginBottom: 16, // Separación entre evaluaciones
    padding: 16, // Espaciado interno
    backgroundColor: '#FFFFFF', // Fondo blanco para cada evaluación
    borderRadius: 8, // Bordes redondeados
    shadowColor: '#000000', // Color de sombra
    shadowOpacity: 0.1, // Opacidad de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowRadius: 4, // Difuminado de la sombra
    elevation: 3, // Elevación para sombra en Android
  },
  noDataText: {
    textAlign: 'center', // Centra el texto
    fontSize: 16, // Tamaño de fuente
    color: '#666666', // Color gris para el texto
    marginTop: 32, // Separación superior
  },
});
