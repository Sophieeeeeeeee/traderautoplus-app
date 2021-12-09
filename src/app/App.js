/**
 * Where everything all get eventually rendered!!!! the ultimate parent of all rendering!!!
 */

import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../components/webDesign/navBar/Navbar";
import Welcome from "../components/webDesign/welcome/Welcome";
import UserInputs from "../components/clientInput/UserInputs";
import Signin from "../components/clientInput/Signin";
import Loans from "../components/clientInfo/Loan";
import Footer from "../components/webDesign/footer/Footer";

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
              <Route path='/sign-in' component = {SignInn}/>
          </Switch>

          <Switch>
              <Route path='/car-details/:car' component = {CarDetails}/>
          </Switch>

          <Footer />
        </Router>
      </>
    )
  }
}


/**
 * Calls UserInputs  to render SignUp page
 * pass down a boolean value to UserInputs class to determine whether to render Signup or Cars class component
 */
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
        <UserInputs which={this.state.UserInputsdisplay} />
        {/*<TestButtons />*/}
      </div>
    );
  }
}

/**
 * Calls UserInputs  to render browse page
 * pass down a boolean value to UserInputs class to determine whether to render Signup or Cars class component
 */
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

/**
 * Calls Signin to render sign-in page
 */
class SignInn extends Component{
    constructor() {
        super();
    }
    render(){
        return(
            <Signin />
        )
    }
}

/**
 * Calls Loans to render car-details page
 */
class CarDetails extends Component{
    constructor() {
        super();
    }
    render(){
        return(
            <Loans/>
        )
    }

}

export default App

