
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabNavigation from './src/navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

