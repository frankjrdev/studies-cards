module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['./jest-setup.js'],
    testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native|expo(nent)?|@expo(nent)?/.*|@unimodules/.*|react-navigation|@react-navigation/.*|@react-native-community|unimodules|sentry-expo|native-base)'
    ]
  };