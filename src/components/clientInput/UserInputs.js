import React, {Component} from "react";
import '../../app/App.css';
import './UserInput.css';
import Signup from './Signup';
import Cars from "../clientInfo/Cars";
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
            name: '',
            password:'',

            creditScore: '',
            zipCode: '',
            maxDownPayment: '',
            maxMonthlyPayment: '',

            carColor: '',
            carType: '',
            carAge: '',
            carBrand: '',

            postResponse: '',
            currentStep: 1,

            advanced:'false',
            monthlyIncome: '',
            monthlyDebt:'',
            employed: '',
            homeowner:''
        }


        //binds functions that updates the State variables to this object
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendPost = this.sendPost.bind(this);
        this.handleCarFilter = this.handleCarFilter.bind(this);

        this.handleCurrentStep2 = this.handleCurrentStep2.bind(this);
        this.handleCurrentStep3 = this.handleCurrentStep3.bind(this);
    }


    /**
     * handleSubmit for submit button on Signup page in Signup class,
     * pass down this function to update state variables of UserInputs class
     * @param  {event} onClick event of the submit button
     */
    handleSubmit(event){
        event.preventDefault()
        const {name, password, creditScore, zipCode, maxDownPayment, maxMonthlyPayment,
                carColor, carType, carAge, carBrand,
                postResponse, currentStep,
                advanced, monthlyIncome,monthlyDebt, employed, homeowner} = this.state

        if (this.state.advanced == 'false'){
            alert(`____Your Details____\n
              Name : ${name}
              Password: ${password}
              Credit score : ${creditScore}
              Location: ${zipCode}
              Down payment: ${maxDownPayment}
              Monthly payment: ${maxMonthlyPayment}
            `)
        }else{
            alert(`____Your Details (Advanced) ____\n
              Name : ${name}
              Password: ${password}
              Credit score : ${creditScore}
              Location: ${zipCode}
              Down payment: ${maxDownPayment}
              Monthly payment: ${maxMonthlyPayment}
              monthlyIncome:${monthlyIncome}
              monthlyDebt:${monthlyDebt}
              employed:${employed}
              homeowner:${monthlyIncome}
            `)
        }

        //this leads to browse page with all current state variables saved in props
        this.props.history.push({
            pathname: '/browse',
            state: this.state
        })
    }

    /**
     * handleChange for input box on Signup page in Signup class,
     * pass down this function to update state variables of UserInputs class
     * @param  {event} onChange event of content of box
     */
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state)
    }

    /**
     * handleCurrentStep set currentStep to 2 to render step 2 of signup page,
     * pass down this function to SignupStep1 as the onClick function of the 'next' button
     */
    handleCurrentStep2(){
        this.setState({currentStep: 2})
    }

    handleCurrentStep3(){
        this.setState({currentStep: 3})
    }

    /**
     * sendPost for Filter button on browse page in Cars class,
     * pass down this function to update state variables of UserInputs class
     */
    sendPost () {
        //const {name, creditScore, zipCode, carPreferences, maxDownPayment, maxMonthlyPayment} = this.state
        //const user = this.state
        let post = {}
        if (this.state.advanced == 'false') {
            try {
                const user = this.props.location.state
                post = {
                    "name": user.name,
                    "password": user.password,
                    "credit-score": user.creditScore,
                    "zip-code": user.zipCode,
                    "downpayment": user.maxDownPayment,
                    "monthlybudget": user.maxMonthlyPayment,
                    "car-preference": this.state.carType
                };
            } catch (err) {
                // const user = this.state
                // post = {
                //     "name": user.name,
                //     "password": user.password,
                //     "credit-score": user.creditScore,
                //     "zip-code": user.zipCode,
                //     "downpayment": user.maxDownPayment,
                //     "monthlybudget": user.maxMonthlyPayment,
                //     "car-preference": user.carType
                //
                // call function to display please sign in sign up: You have not inputted required info, please go to sign in or sign up
            }
        } else{
            try {
                const user = this.props.location.state
                post = {
                    "name": user.name,
                    "password": user.password,
                    "credit-score": user.creditScore,
                    "zip-code": user.zipCode,
                    "downpayment": user.maxDownPayment,
                    "monthlybudget": user.maxMonthlyPayment,
                    "car-preference": this.state.carType,
                    "monthlydebt": user.monthlyDebt,
                    "monthlyincome":user.monthlyIncome,
                    "employed": user.employed,
                    "homeowner": user.homeowner
                };
            } catch (err) {
                const user = this.state
                // post = {
                //     "name": user.name,
                //     "password": user.password,
                //     "credit-score": user.creditScore,
                //     "zip-code": user.zipCode,
                //     "downpayment": user.maxDownPayment,
                //     "monthlybudget": user.maxMonthlyPayment,
                //     "car-preference": user.carType
                // };
            }

        }
        console.log(JSON.stringify(post))

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        };


        fetch("https://cors-everywhere.herokuapp.com/http://ec2-18-118-19-97.us-east-2.compute.amazonaws.com:8080/traderauto-plus", requestOptions)
        //fetch("http://localhost:8080/traderauto-plus", requestOptions)
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
                    password = {this.state.password}
                    maxMonthlyPayment = {this.state.maxMonthlyPayment}
                    maxDownPayment = {this.state.maxDownPayment}
                    zipCode = {this.state.zipCode}
                    creditScore = {this.state.creditScore}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    sendPost = {this.sendPost}
                    currentStep={this.state.currentStep}
                    handleCurrentStep2 = {this.handleCurrentStep2}
                    handleCurrentStep3 = {this.handleCurrentStep3}

                    advanced = {this.state.advanced}
                    monthlyIncome = {this.state.monthlyIncome}
                    monthlyDebt = {this.state.monthlyDebt}
                    employed = {this.state.employed}
                    homeowner = {this.state.homeowner}
                    handleCarFilter = {this.handleCarFilter}
                />
            )

        } else { // if false, return browse
            console.log('test')
            console.log(this.state.postResponse)

            return(
                <div>
                <Cars
                carColor = {this.state.carColor}
                carType = {this.state.carType}
                carBrand = {this.state.carBrand}
                carAge = {this.state.carAge}
                postResponse = {this.state.postResponse}
                handleCarFilter = {this.handleCarFilter}
                sendPost = {this.sendPost}
                />
                </div>
            )
        }

    }

}
export default withRouter(UserInputs)
// export default UserInputs
