import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Input from "./components/Input";
import Button from "./components/Button";
import { Actions } from "react-native-router-flux";

export default class Landing extends React.Component {
  state = {};

  goToLogin = () => {
    Actions.login();
  };
  render() {
    const {} = this.state;
    return (
      <View>
        <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
