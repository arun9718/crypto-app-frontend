import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Index from './pages';
import Constants from 'expo-constants';
import Storybook from './.storybook';

function App() {
  return (
    <PaperProvider>
      <Index/>
    </PaperProvider>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;


