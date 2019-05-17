import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { lighterWhite } from "../utils/Colors";

const Header = ({ title, rightIcon, logout }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title.toUpperCase()}</Text>
    {rightIcon ? (
      <TouchableOpacity onPress={logout} style={styles.userIcon}>
        <MaterialIcons name="account-circle" size={24} color={lighterWhite} />
      </TouchableOpacity>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#305B73",
    width: "100%",
    padding: 10,
    alignItems: "center"
  },
  headerText: {
    color: "#fff"
  },
  userIcon: {
    position: "absolute",
    right: 5,
    top: 6
  }
});

export default Header;
