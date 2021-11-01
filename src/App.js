import './App.css';
import React, {Component} from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
    constructor () {
        super()
        this.state = {
            databasee: '',
            senso:''
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

    render () {
        return (
            <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact />
                </Switch>

            </Router>
                <div className='App'>
                    <UserInputs />
                    <div>
                        <button className='button' onClick={this.handleClick}>Senso</button>
                        <button className='button' onClick={this.handleClickk}>Database</button>
                        <p>{this.state.senso}</p>
                        <p>{this.state.databasee}</p>
                    </div>
                </div>
            </>
        )
    }
}

class UserInputs extends Component{
    constructor() {
        super();
        this.state = {
            name:'',
            creditScore: '',
            zipCode: '',
            carPreferences: '',
            maxDownPayment: '',
            maxMonthlyPayment: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendPost = this.sendPost.bind(this)
    }

    handleSubmit(event){
        const {name, creditScore, zipCode, carPreferences, maxDownPayment, maxMonthlyPayment} = this.state
        event.preventDefault()
        alert(`____Your Details____\n
          Name : ${name}
          Credit score : ${creditScore}
          Location: ${zipCode}
          Down payment: ${maxDownPayment}
          Monthly payment: ${maxMonthlyPayment}
        `)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    sendPost () {
        //const {name, creditScore, zipCode, carPreferences, maxDownPayment, maxMonthlyPayment} = this.state
        const user = this.state
        console.log(user)
        console.log(JSON.stringify(user))

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        };
        fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    };


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:
                            <input name = "name"
                                   type="text"
                                   value={this.state.name}
                                   onChange={this.handleChange}/>
                        </label>
                    </div>

                    <div>
                        <label>Credit Score:
                            <input name = "creditScore"
                                   type="text"
                                   value={this.state.creditScore}
                                   onChange={this.handleChange}/>
                        </label>
                    </div>

                    <div>
                        <label>Downpayment:
                            <input name = "maxDownPayment"
                                   type="text"
                                   value={this.state.maxDownPayment}
                                   onChange={this.handleChange}/>
                        </label>
                    </div>

                    <div>
                        <label>Zip Code:
                            <input name = "zipCode"
                                   type="text"
                                   value={this.state.zipCode}
                                   onChange={this.handleChange}/>
                        </label>
                    </div>

                    <div>
                        <label>Monthly Budget:
                            <input name = "maxMonthlyPayment"
                                   type="text"
                                   value={this.state.maxMonthlyPayment}
                                   onChange={this.handleChange}/>
                        </label>
                    </div>

                    <input type="submit"
                           value="Submit" />

                </form>

                <div>
                    <button className='post_request' onClick={this.sendPost}>Post</button>
                </div>
            </div>
        )
    }

}

export default App
