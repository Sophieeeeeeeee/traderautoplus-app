import './App.css';
import React, {Component} from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
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

class TestButtons extends Component{
    constructor() {
        super();
        this.state = {
            databasee: '',
            senso:'',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickk = this.handleClickk.bind(this)
    }
    handleClick () {
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
            this.setState({senso: xhr.responseText})
        })
        xhr.open('GET', 'https://cors-everywhere.herokuapp.com/http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/senso')
        xhr.send()
    }

    handleClickk () {
        var db = new XMLHttpRequest()
        db.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(db.responseText)
            this.setState({databasee: db.responseText})
        })
        db.open('GET', 'https://cors-everywhere.herokuapp.com/http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/database')
        db.send()
    }

    render(){
        return(
        <div>
            <button className='button' onClick={this.handleClick}>Senso</button>
            <button className='button' onClick={this.handleClickk}>Database</button>
            <p>{this.state.senso}</p>
            <p>{this.state.databasee}</p>
        </div>
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

class SignIn extends Component{
    constructor() {
        super();
        this.state={
            registered:false,
            loggedIn: false,
        }
    }
    render(){
        return(
            <></>
        )
    }
}

export default App
