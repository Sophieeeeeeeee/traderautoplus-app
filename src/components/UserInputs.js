import React, {Component} from "react";
import '../App.css';
import './UserInput.css';
import Signup from './Signup';
import Cars from "./Cars";
import { withRouter } from 'react-router-dom';

class UserInputs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Paul',
            creditScore: '770',
            zipCode: 'M5S 1Z6',
            maxDownPayment: '500',
            maxMonthlyPayment: '2000',

            carColor: '',
            carType: '',
            carAge: '',
            carBrand: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendPost = this.sendPost.bind(this);
        this.handleCarFilter = this.handleCarFilter.bind(this);
    }

    handleSubmit(event){
        event.preventDefault()
        const {name, creditScore, zipCode, maxDownPayment, maxMonthlyPayment, carColor, carType, carAge, carBrand} = this.state
        alert(`____Your Details____\n
          Name : ${name}
          Credit score : ${creditScore}
          Location: ${zipCode}
          Down payment: ${maxDownPayment}
          Monthly payment: ${maxMonthlyPayment}
        `)
        this.props.history.push({
            pathname: '/browse',
            state: this.state
        })
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state)
    }

    sendPost () {
        //const {name, creditScore, zipCode, carPreferences, maxDownPayment, maxMonthlyPayment} = this.state
        // const user = this.state
        let post = {}
        try {
            const user = this.props.location.state
            post = {
                "name": user.name,
                "credit-score": user.creditScore,
                "zip-code": user.zipCode,
                "downpayment": user.maxDownPayment,
                "monthlybudget": user.maxMonthlyPayment,
                "car-preference": this.state.carType
            };
        } catch (err){
            const user = this.state
            post = {
                "name": user.name,
                "credit-score": user.creditScore,
                "zip-code": user.zipCode,
                "downpayment": user.maxDownPayment,
                "monthlybudget": user.maxMonthlyPayment,
                "car-preference": user.carType.value
            };
        }
        // {"car-preference": "SUV", "zip-code": "M51 1S6", "downpayment": "200", "name": "Paul", "credit-score":"770" , "monthlybudget": "5000"}
        // console.log(post)
        console.log(JSON.stringify(post))

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        };
         //
        // var postRequest = "";
        fetch("http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/traderauto-plus", requestOptions)
            .then(response => response.json())
            .then(response => console.log(response))
            // .then(res => this.setState({postRequest: res}))
    };

    handleCarFilter(value, action){

        this.setState({ [action.name]:value})
        console.log(this.state)
        console.log(this.props.location.state)
    }

    render(){
        if(this.props.which){ // if true, return signup
            return(<Signup
                    name = {this.state.name}
                    maxMonthlyPayment = {this.state.maxMonthlyPayment}
                    zipCode = {this.state.zipCode}
                    creditScore = {this.state.creditScore}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    sendPost = {this.sendPost}/>
            )

        } else { // if false, return browse
            return(
                <div>
                <Cars
                carColor = {this.state.carColor}
                carType = {this.state.carType}
                carBrand = {this.state.carBrand}
                carAge = {this.state.carAge}
                handleCarFilter = {this.handleCarFilter}
                sendPost = {this.sendPost}/>
                </div>
            )
        }

    }

}
export default withRouter(UserInputs)
// export default UserInputs
