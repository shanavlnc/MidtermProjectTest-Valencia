import 'react-native-get-random-values'; // Polyfill for uuid
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider } from './context/ThemeContext';

const App = () => (
  <ThemeProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;