import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    imagesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 20,
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFFFFF',
    },
    header: {
      marginHorizontal: 10,
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
    stepIndicator: {
      marginVertical: 20,
    },
    instruction: {
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
      marginVertical: 20,
      color: '#333',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 30,
    },
    previewContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginVertical: 20,
    },
    previewImage: {
      width: 100,
      height: 100,
      margin: 5,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    footerButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 'auto',
    },
    cancelButton: {
      marginRight: 10,
    },
    imageHeader: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#00a8cc',
      marginBottom: 4,
    },
    headerEvaluation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      marginRight: 10,
    },
  });
  