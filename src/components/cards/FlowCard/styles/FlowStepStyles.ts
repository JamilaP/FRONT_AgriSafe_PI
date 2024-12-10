import { StyleSheet } from 'react-native';

const FlowStepStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    maxWidth: 80,
    flexWrap: 'wrap', 
  },
});

export default FlowStepStyles;
