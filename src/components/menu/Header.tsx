import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Style/HeaderStyles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/LogoAgriSafe.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>AgriSafe</Text>
    </View>
  );
};

export default Header;
