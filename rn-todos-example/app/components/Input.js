import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { inputPlaceholder } from "../utils/Colors";

const Input = ({
  inputValue,
  onChangeText,
  onDoneAddItem,
  placeholderValue,
  password,
  styleErr
}) => (
  <TextInput
    style={[styles.input, styleErr]}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder={placeholderValue}
    placeholderTextColor={inputPlaceholder}
    autoCapitalize="none"
    underlineColorAndroid="transparent"
    selectionColor={"white"}
    maxLength={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
    onSubmitEditing={onDoneAddItem}
    secureTextEntry={password}
  />
);

const styles = StyleSheet.create({
  input: {
    paddingTop: 3,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 18,
    color: "#305B73",
    fontWeight: "300",
    borderWidth: 1,
    borderColor: "#305B73",
    borderRadius: 10,
    width: 300,
    marginBottom: 15,
    height: 40
  }
});

export default Input;
