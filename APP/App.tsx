import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './app/navigation';

const SafeAreaApp = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  )
}

const App = () => {
  return (
    <SafeAreaApp/>
  )
}

export default App;
