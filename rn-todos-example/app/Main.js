import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  AsyncStorage,
  SafeAreaView
} from "react-native";
import { Actions } from "react-native-router-flux";

import Header from "./components/Header";
import Item from "./components/Item";

export default class Main extends React.Component {
  goToLogin = () => {
    Actions.login();
  };
  render() {
    return (
      <View style={{ backgroundColor: "#f00" }}>
        <SafeAreaView
          style={{
            backgroundColor: "#fff",
            height: "100%",
            alignItems: "center"
          }}
        >
          <Header title="Home" rightIcon={true} logout={this.goToLogin} />
          <View style={styles.itemContainer}>
            <Item
              description="Veg Tiffin"
              imgPath={require("../assets/veg.jpg")}
            />
            <Item
              description="Non-veg Tiffin"
              imgPath={require("../assets/non-veg.png")}
            />
          </View>
          <View style={styles.itemContainer}>
            <Item
              description="Diet Tiffin"
              imgPath={require("../assets/diet.jpg")}
            />
            <Item
              description="Diet-Rice Tiffin"
              imgPath={require("../assets/diet_rice.jpg")}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centered: {
    alignItems: "center"
  },
  itemContainer: {
    padding: 10,
    flexDirection: "row"
  }
});
