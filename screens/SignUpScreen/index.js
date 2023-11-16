import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Image, Button } from 'react-native';

const SignUpScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm your password" secureTextEntry={true} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" color="#841584" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  inputContainer: {
    flex: 2,
    width: '80%'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  buttonContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center'
  }
});
export default SignUpScreen;