import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text>Login Screen</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  }
});
export default LoginScreen;