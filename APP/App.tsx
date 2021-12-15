import React from 'react';
import { StyleSheet } from 'react-native';
import SafeAreaProvider from 'react-native-safe-area-context';

import AppNavigator from './app/navigation';
import { Theme } from './app/theme';

const SafeAreaApp = () => {
  return (
    <SafeAreaProvider style={styles().container}>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

const App = () => {
  return (
    <SafeAreaApp/>
  );
};

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.bg
  }
});

export default App;
