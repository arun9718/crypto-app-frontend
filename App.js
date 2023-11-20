import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Index from './pages';

export default function App() {
  return (
    <PaperProvider>
      <Index/>
    </PaperProvider>
  );
}


