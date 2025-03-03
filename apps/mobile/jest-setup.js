// jest-setup.js
import '@testing-library/jest-native/extend-expect';

// Mock expo-font
jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
}));

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: (props) => <View {...props} />,
  };
});