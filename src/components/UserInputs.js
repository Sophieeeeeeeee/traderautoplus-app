import React, {Component} from "react";
import '../App.css';
import './UserInput.css';
import Signup from './Signup';
import Cars from "./Cars";
import { withRouter } from 'react-router-dom';

/**
 * Class that holds all information about a user, user's basic info and car preference
 * Renders Signup or Browse page based on props
 * @props  {boolean} which if true, renders Signup, if false, renders browse
 * @state {String} name
 * @state  {String} creditScore
 * @state  {String} zipCode
 * @state  {String} maxDownPayment
 * @state  {String} maxMonthlyPayment
 *
 * @state  {String} carColor
 * @state  {String} carType
 * @state  {String array} carAge
 * @state  {String array} carBrand
 *
 */
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
            carBrand: '',

            postResponse: ''}


        //binds functions that updates the State variables to this object
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendPost = this.sendPost.bind(this);
        this.handleCarFilter = this.handleCarFilter.bind(this);
    }


    /**
     * handleSubmit for submit button on Signup page in Signup class,
     * pass down this function to update state variables of UserInputs class
     * @param  {event} onClick event of the submit button
     */
    handleSubmit(event){
        event.preventDefault()
        const {name, creditScore, zipCode, maxDownPayment, maxMonthlyPayment, carColor, carType, carAge, carBrand, postResponse} = this.state
        alert(`____Your Details____\n
          Name : ${name}
          Credit score : ${creditScore}
          Location: ${zipCode}
          Down payment: ${maxDownPayment}
          Monthly payment: ${maxMonthlyPayment}
        `)

        //this leads to browse page with all current state variables saved in props
        this.props.history.push({
            pathname: '/browse',
            state: this.state
        })
    }

    /**
     * handleChange for input boxed on Signup page in Signup class,
     * pass down this function to update state variables of UserInputs class
     * @param  {event} onChange event of content of box
     */
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state)
    }

    /**
     * sendPost for Filter button on browse page in Cars class,
     * pass down this function to update state variables of UserInputs class
     */
    sendPost () {
        //const {name, creditScore, zipCode, carPreferences, maxDownPayment, maxMonthlyPayment} = this.state
        //const user = this.state
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
                "car-preference": user.carType
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
        var postRequest = "";
        fetch("http://ec2-18-118-163-255.us-east-2.compute.amazonaws.com:8080/traderauto-plus", requestOptions)
            .then(response => response.json())
            .then(response => this.setState({postResponse: response}))
            .then(response => console.log(this.state.postResponse))
    };

    /**
     * handleCarFilter function for detecting changes in dropdown boxed for car preference on browse page in CarFilter class
     * pass down this function to update state variables of UserInputs class
     */
    handleCarFilter(value, action){

        this.setState({ [action.name]:value.value})
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
                postResponse = {this.state.postResponse}
                handleCarFilter = {this.handleCarFilter}
                sendPost = {this.sendPost}/>
                </div>
            )
        }

    }

}
export default withRouter(UserInputs)
// export default UserInputs
