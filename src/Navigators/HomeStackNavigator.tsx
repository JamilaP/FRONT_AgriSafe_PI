import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UploadImagenScreen from '../screens/UploadImagenScreen';
import RemoveBackground from '../screens/RemoveBackground';
import ClassificationModelScreen from '../screens/ClassificationModelScreen';
import SegmentationModelScreen from '../screens/SegmentationModelScreen';
import ResultReportScreen from '../screens/ResultReportScreen';
import MainLayout from '../layout/MainLayout';

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* Home Screen with MainLayout */}
    <Stack.Screen name="Home">
      {(props) => (
        <MainLayout>
          <HomeScreen/>
        </MainLayout>
      )}
    </Stack.Screen>

    {/* Upload Screen with MainLayout */}
    <Stack.Screen name="Upload">
      {(props) => (
        <MainLayout>
          <UploadImagenScreen {...props} />
        </MainLayout>
      )}
    </Stack.Screen>

    {/* Remove Background Screen with MainLayout */}
    <Stack.Screen name="RemoveBackground">
      {(props) => (
        <MainLayout>
          <RemoveBackground {...props} />
        </MainLayout>
      )}
    </Stack.Screen>

    {/* Classification Model Screen */}
    <Stack.Screen name="ClassificationModelScreen">
      {(props) => (
        <MainLayout>
          <ClassificationModelScreen {...props} />
        </MainLayout>
      )}
    </Stack.Screen>

    {/* Segmentation Model Screen */}
    <Stack.Screen name="SegmentationModelScreen">
      {(props) => (
        <MainLayout>
          <SegmentationModelScreen {...props}/>
        </MainLayout>
      )}
    </Stack.Screen>

    {/* Segmentation Model Screen */}
    <Stack.Screen name="ResultReportScreen">
      {(props) => (
        <MainLayout>
          <ResultReportScreen  {...props}/>
        </MainLayout>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

export default HomeStackNavigator;
