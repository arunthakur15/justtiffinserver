import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Signup from "./app/Signup.js";
import Login from "./app/Login.js";
import Main from "./app/Main.js";

const Routes = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene
        key="registration"
        component={Signup}
        title="Registration"
        initial={true}
      />

      <Scene key="login" component={Login} title="Login" />
      <Scene key="main" component={Main} title="Home" />
    </Scene>
  </Router>
);
export default Routes;
