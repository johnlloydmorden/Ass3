
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Logo from './Logo';
import { showMessage } from 'react-native-flash-message';

const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState('');

  const handleSendEmail = () => {
    
    if (!email) {
      showMessage({
        message: "Unsuccessful request",
        description: "Please enter your email.",
        type: "danger",
        backgroundColor: '#ff4d4d', 
      });
      return;
    }

    
    showMessage({
      message: "Recovery email sent!",
      description: "If this email is registered, you will receive a recovery link.",
      type: "success",
      backgroundColor: '#003366', 
    });

   
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <TextInput 
        placeholder="Enter your email" 
        value={email} 
        onChangeText={setEmail} 
        style={styles.input} 
      />
      <Button title="Send Recovery Email" onPress={handleSendEmail} color="#003366" />
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

export default PasswordRecoveryPage;