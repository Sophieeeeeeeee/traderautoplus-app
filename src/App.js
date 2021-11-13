/**
 * Where everything all get eventually rendered!!!! the ultimate parent of all rendering!!!
 */

import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import TestButtons from "./components/TestButtons";
import Welcome from "./components/Welcome";
import UserInputs from "./components/UserInputs";

class App extends Component {
    constructor () {
        super()
        this.state = {
        }
    }
    render () {
        return (
            <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component = {Welcome}/>
                </Switch>

                <Switch>
                <Route path='/sign-up' exact component = {Signupp}/>
                </Switch>

                <Switch>
                    <Route path='/browse' component = {DisplayCars}/>
                </Switch>

            </Router>
            </>
        )
    }
}

class Signupp extends Component{
    constructor() {
        super();
        this.state={
            UserInputsdisplay: true
        }
    }
    render(){
        return(
                <div>
                    {/*<UserInputs />*/}
                    <UserInputs
                        which = {this.state.UserInputsdisplay}
                        />

                    <TestButtons />
                </div>
        )
    }
}

class DisplayCars extends Component{
    constructor () {
        super()
        this.state = {
            UserInputsdisplay: false
        }
    }
    render () {
        return (
            <>
                <div>
                    <UserInputs
                        which = {this.state.UserInputsdisplay}
                    />
                </div>
            </>
        )
    }

}

// class SignIn extends Component{
//     constructor() {
//         super();
//         this.state={
//             registered:false,
//             loggedIn: false,
//         }
//     }
//     render(){
//         return(
//             <></>
//         )
//     }
// }

export default App
