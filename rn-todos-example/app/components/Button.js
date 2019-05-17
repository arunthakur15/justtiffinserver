import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ registerUser, btnTxt }) => (
  <TouchableOpacity onPress={registerUser} style={styles.button}>
    <Text style={{ color: "#fff", fontSize: 18 }}>Submit</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    padding: 8,
    borderRadius: 50,
    width: 300,
    alignItems: "center",
    height: 40,
    marginTop: 20,
    backgroundColor: "#ccc"
  }
});

export default Button;
