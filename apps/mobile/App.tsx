import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabNavigation from './src/navigation/BottomTabNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
