import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Button, Image } from "react-native";

const App = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#003f5c" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#003f5c" secureTextEntry />
        <Button title="Login" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  }
});
export default App;