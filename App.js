import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadPage from './components/LoadPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import PasswordRecoveryPage from './components/PasswordRecoveryPage';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Load">
        <Stack.Screen 
          name="Load" 
          component={LoadPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegistrationPage} 
          options={{ title: 'Register' }} 
        />
        <Stack.Screen 
          name="Recover Password" 
          component={PasswordRecoveryPage} 
          options={{ title: 'Recover Password' }} 
        />
      </Stack.Navigator>
      {}
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
}