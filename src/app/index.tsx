import { Image, StyleSheet, Platform } from 'react-native';
import MainStepScreen from '../screens/MainStepScreen';
import FlowCard from '../components/cards/FlowCard/FlowCard';
import { Box, Text } from 'native-base';
import Menu from '../components/menu/Menu';
import { useState } from 'react';
import LoginForm from '../components/form/LoginForm';
import SignUpForm from '../components/form/SignUpForm';



export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Inicio');
  const handleNavigate = () => {
    console.log('Navigate to next screen');
  };

  return (
    <div>
      <div>Hola Mundo</div>
      {/*<MainStepScreen />*/}
      {/*<FlowCard onPress={handleNavigate}/>*/}
      {/*<Menu activeTab={activeTab} onNavigate={handleNavigate} />*/}
      {/*<LoginForm />*/}
      <SignUpForm />
    
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
