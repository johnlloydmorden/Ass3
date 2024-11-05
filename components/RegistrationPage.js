// components/RegistrationPage.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Logo from './Logo';
import { showMessage } from 'react-native-flash-message';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      showMessage({
        message: "Unsuccessful registration",
        description: "Please fill in all fields.",
        type: "danger",
      });
      return;
    }

    if (password !== confirmPassword) {
      showMessage({
        message: "Unsuccessful registration",
        description: "Passwords do not match.",
        type: "danger",
      });
      return;
    }

    showMessage({
      message: "Successfully registered!",
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
      <TextInput placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} style={styles.input} />
      <Button title="Sign Up" onPress={handleSignUp} color="#003366" />
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
});

export default RegistrationPage;