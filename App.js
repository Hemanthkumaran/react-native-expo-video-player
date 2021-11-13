import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar barStyle="light"/>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}