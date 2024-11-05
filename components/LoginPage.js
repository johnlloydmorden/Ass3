import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from './Logo';
import { showMessage } from 'react-native-flash-message';

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      showMessage({
        message: "Unsuccessful login",
        description: "Please enter both email and password.",
        type: "danger",
      });
      return;
    }

    showMessage({
      message: "Successfully logged in!",
      type: "success",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <Button title="Sign In" onPress={handleSignIn} color="#003366" />

    
      <View style={styles.buttonContainer}>
        <Button title="Create Account" onPress={() => navigation.navigate('Register')} color="#28a745" />
      </View>

      
      <View style={styles.forgotPasswordContainer}>
        <Button title="Forgot Password?" onPress={() => navigation.navigate('Recover Password')} color="#ff4d4d" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E6E6FA',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    height: 50,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 20,
  },
  forgotPasswordContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default LoginPage;