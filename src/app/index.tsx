import { Image, StyleSheet, Platform } from 'react-native';
import MainStepScreen from '../screens/MainStepScreen';
import FlowCard from '../components/cards/FlowCard/FlowCard';



export default function HomeScreen() {
  const handleNavigate = () => {
    console.log('Navigate to next screen');
  };

  return (
    <div>
      <div>Hola Mundo</div>
      {/*<MainStepScreen />*/}
      <FlowCard onPress={handleNavigate}/>
    </div>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
