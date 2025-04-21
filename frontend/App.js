import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SessionProvider } from './src/context/SessionContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SessionProvider>
        <AppNavigator />
      </SessionProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
