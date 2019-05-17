import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Input from "./components/Input";
import Button from "./components/Button";
import Header from "./components/Header";
import { Actions } from "react-native-router-flux";

export default class Signup extends React.Component {
  state = {
    name: "",
    gender: "",
    number: "",
    org: "",
    password: "",
    loadingItems: false,
    allItems: {},
    isCompleted: false,
    nameValidate: true,
    numberValidate: true,
    gValidate: true,
    passValidate: true,
    orgValidate: true
  };

  newInputValue = value => {
    console.log(value);
    this.setState({
      inputValue: value
    });
  };
  validateForm = (val, type) => {
    let alph;
    switch (type) {
      case "Name":
        alph = /^[a-zA-Z ]*$/;
        if (alph.test(val)) {
          console.log("valid");
          this.setState({ nameValidate: true });
        } else {
          this.setState({ nameValidate: false });
          console.log("invalid");
        }
      case "Gender":
        alph = /^[a-zA-Z ]*$/;
        if (alph.test(val)) {
          console.log("valid");
          this.setState({ gValidate: true });
        } else {
          this.setState({ gValidate: false });
          console.log("invalid");
        }
      case "Mobile Number":
        alph = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (alph.test(val)) {
          console.log("valid");
          this.setState({ numberValidate: true });
        } else {
          this.setState({ numberValidate: false });
          console.log("invalid");
        }
      case "Organisation":
        alph = /^[a-zA-Z ]*$/;
        if (alph.test(val)) {
          console.log("valid");
          this.setState({ orgValidate: true });
        } else {
          this.setState({ orgValidate: false });
          console.log("invalid");
        }
      case "Password":
        alph = /^[a-zA-Z0-9_]*$/;
        if (alph.test(val)) {
          console.log("valid");
          this.setState({ passValidate: true });
        } else {
          this.setState({ passValidate: false });
          console.log("invalid");
        }
      default:
        alph = /^[a-zA-Z ]*$/;
    }
  };
  onDoneAddItem = () => {
    const { inputValue } = this.state;
    if (inputValue !== "") {
      console.log(inputValue);
    }
  };

  goToLogin = () => {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      credentials: "same-origin",
      mode: "same-origin",
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        number: parseInt(this.state.number),
        gender: this.state.gender,
        org: this.state.org
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        Actions.login();
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    const { name, gender, number, org, password } = this.state;
    return (
      <View>
        <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
          <Header title="Registeration" rightIcon={false} />
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Just</Text>
            <Text style={styles.mainTitle}>Tiffins</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              styleErr={!this.state.nameValidate ? styles.err : null}
              inputValue={name}
              placeholderValue="Name"
              onChangeText={inputValue => {
                this.setState({ name: inputValue });
                this.validateForm(inputValue, "Name");
              }}
              onDoneAddItem={this.onDoneAddItem}
            />
            <Input
              styleErr={!this.state.gValidate ? styles.err : null}
              inputValue={gender}
              placeholderValue="Gender"
              onChangeText={inputValue => {
                this.setState({ gender: inputValue });
                this.validateForm(inputValue, "Gender");
              }}
              onDoneAddItem={this.onDoneAddItem}
            />
            <Input
              styleErr={!this.state.numberValidate ? styles.err : null}
              inputValue={number}
              placeholderValue="Mobile Number"
              onChangeText={inputValue => {
                this.setState({ number: inputValue });
                this.validateForm(inputValue, "Mobile Number");
              }}
              onDoneAddItem={this.onDoneAddItem}
            />
            <Input
              styleErr={!this.state.orgValidate ? styles.err : null}
              inputValue={org}
              placeholderValue="Organisation"
              onChangeText={inputValue => {
                this.setState({ org: inputValue });
                this.validateForm(inputValue, "Organisation");
              }}
              onDoneAddItem={this.onDoneAddItem}
            />
            <Input
              styleErr={!this.state.passValidate ? styles.err : null}
              inputValue={password}
              placeholderValue="Password"
              onChangeText={inputValue => {
                this.setState({ password: inputValue });
                this.validateForm(inputValue, "Password");
              }}
              onDoneAddItem={this.onDoneAddItem}
              password={true}
            />

            <Button registerUser={this.goToLogin} />
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
  },
  err: {
    borderColor: "#f00",
    borderWidth: 1
  }
});
