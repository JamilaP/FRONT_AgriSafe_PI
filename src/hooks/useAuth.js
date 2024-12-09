import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token'); 
      setAuthenticated(!!token); 
    };
    checkAuth();
  }, []);

  return authenticated;
};

export default useAuth;
