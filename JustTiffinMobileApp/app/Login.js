import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import Input from "./components/Input";
import Button from "./components/Button";
import { Actions } from "react-native-router-flux";

export default class Login extends React.Component {
  state = {
    btnTxt: "",
    username: "",
    password: "",
    loadingItems: false,
    allItems: {},
    isCompleted: false
  };
  newInputValue = value => {
    this.setState({
      inputValue: value
    });
  };
  onDoneAddItem = () => {
    const { inputValue } = this.state;
    if (inputValue !== "") {
      console.log(inputValue);
    }
  };

  goToLogin = () => {
    Actions.main();
  };
  render() {
    const { username, btnTxt, password } = this.state;
    return (
      <View>
        <SafeAreaView
          style={{
            backgroundColor: "#fff",
            height: "100%",
            alignItems: "center"
          }}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Just</Text>
            <Text style={styles.mainTitle}>Tiffins</Text>
          </View>
          <Image
            source={require("../assets/dabba.jpg")}
            style={{ height: 150, width: 150 }}
          />
          <View style={styles.inputContainer}>
            <Input
              inputValue={username}
              placeholderValue="Username"
              onChangeText={this.newInputValue}
              onDoneAddItem={this.onDoneAddItem}
            />

            <Input
              inputValue={password}
              placeholderValue="Password"
              onChangeText={this.newInputValue}
              onDoneAddItem={this.onDoneAddItem}
              password={true}
            />

            <Button registerUser={this.goToLogin} btnTxt="Login" />
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
  inputContainer: {
    marginTop: 40,
    paddingLeft: 15,
    alignItems: "center"
  },
  list: {
    flex: 1,
    marginTop: 70,
    paddingLeft: 15,
    marginBottom: 10
  },
  scrollableList: {
    marginTop: 15
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  deleteAllButton: {
    marginRight: 40
  },
  headerContainer: {
    marginTop: 5,
    backgroundColor: "#305B73",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
    alignItems: "center"
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center"
  },
  mainTitle: {
    fontSize: 75,
    color: "#305B73",
    fontFamily: "MarkerFelt-Thin"
  }
});
