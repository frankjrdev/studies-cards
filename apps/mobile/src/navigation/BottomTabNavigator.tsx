
import { Ionicons } from '@expo/vector-icons'; // Puedes usar cualquier icono
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import StatsScreenScreen from '../screens/StatsScreen.';



const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
    return (
       <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: 'home' | 'folder' | 'stats-chart' = 'home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Projects') {
            iconName = 'folder';
          } else if (route.name === 'Stats') {
            iconName = 'stats-chart';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
       >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Stats" component={StatsScreenScreen} />

       </Tab.Navigator>
    )
}