/**
 * Where everything all get eventually rendered!!!! the ultimate parent of all rendering!!!
 */

import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../components/webDesign/navBar/Navbar";
import TestButtons from "../components/webDesign/button/TestButtons";
import Welcome from "../components/webDesign/welcome/Welcome";
import UserInputs from "../components/clientInput/UserInputs";
import Footer from "../components/webDesign/footer/Footer";

// For sign in session using React context
const SignedIn = React.createContext(false);
const { Provider, Consumer } = SignedIn;

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Welcome} />
          </Switch>

          <Switch>
            <Route path="/sign-up" exact component={Signupp} />
          </Switch>

          <Switch>
            <Route path="/browse" component={DisplayCars} />
          </Switch>

          <Switch>
            <Route path="/sign-in" component={SignInn} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

class Signupp extends Component {
  constructor() {
    super();
    this.state = {
      UserInputsdisplay: true,
    };
  }
  render() {
    return (
      <div>
        {/*<UserInputs />*/}
        <UserInputs which={this.state.UserInputsdisplay} />
        {/*<TestButtons />*/}
      </div>
    );
  }
}

class DisplayCars extends Component {
  constructor() {
    super();
    this.state = {
      UserInputsdisplay: false,
    };
  }
  render() {
    return (
      <>
        <div>
          <UserInputs which={this.state.UserInputsdisplay} />
        </div>
      </>
    );
  }
}

class SignInn extends Component {
  constructor() {
    super();
    this.state = {
      // registered:false,
      // loggedIn: false,
    };
  }
  render() {
    return <></>;
  }
}

export default App;
