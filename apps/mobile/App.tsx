import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StudyScreen" component={StudyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
