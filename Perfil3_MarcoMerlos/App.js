import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import StudentScreen from './src/screens/StudentScreen';
import ApiScreen from './src/screens/ApiScreen';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121218',
    card: '#191920',
    text: '#FFFFFF',
    border: '#2A2A34',
    primary: '#A83DDB'
  }
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Estudiante"
        screenOptions={{
          headerStyle: { backgroundColor: '#191920' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '800' },
          contentStyle: { backgroundColor: '#121218' }
        }}
      >
        <Stack.Screen name="Estudiante" component={StudentScreen} />
        <Stack.Screen name="API" component={ApiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}