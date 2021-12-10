import React, {Component} from "react";
import '../../app/App.css';
import './UserInput.css';
import SignUp from './SignUp';
import Cars from "../clientInfo/Cars";
import { withRouter } from 'react-router-dom';

/**
 * Class that holds all information about a user and functions that change the user input variables
 * Renders SignUp or Browse page based on props
 * @props  {boolean} which if true, renders SignUp, if false, renders browse
 *
 * @state {String} name
 * @state {String} password
 *
 * @state  {String} creditScore
 * @state  {String} zipCode
 * @state  {String} maxDownPayment
 * @state  {String} maxMonthlyPayment
 *
 * @state  {String} carColor
 * @state  {String} carType
 * @state  {String} carAge
 * @state  {String} carBrand
 *
 * @state  {String} postResponse
 * @state  {int} currentStep
 *
 * @state  {String} advanced
 * @state  {String} monthlyIncome
 * @state  {String} monthlyDebt
 * @state  {String} employed
 * @state  {String} homeowner
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

            advanced:'',
            monthlyIncome: '',
            monthlyDebt:'',
            employed: '',
            homeowner:''
        }

        //binds functions that updates the State variables to this object
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendPost = this.sendPost.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCarFilter = this.handleCarFilter.bind(this);

        this.handleCurrentStep2 = this.handleCurrentStep2.bind(this);
        this.handleCurrentStep3 = this.handleCurrentStep3.bind(this);

        this.stepOneNext = this.stepOneNext.bind(this);
        this.stepTwoNext = this.stepTwoNext.bind(this);

    }


    /**
     * handleSubmit for submit button on SignUp page in SignUp class,
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
              homeowner:${homeowner}
            `)
        }

        //this leads to browse page with all current state variables saved in props
        this.props.history.push({
            pathname: '/browse',
            state: this.state
        })
    }

    /**
     * handleChange for input box on SignUp page in SignUp class,
     * pass down this function to update state variables of UserInputs class
     * @param  {event} onChange event of content of box
     */
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state)
    }

    /**
     * handleCurrentStep set currentStep to 2 to render step 2 of signup page,
     * pass down this function to SignUpStep1 as the onClick function of the 'next' button on step1
     */
    handleCurrentStep2(){
        this.setState({currentStep: 2})
    }

    /**
     * handleCurrentStep set currentStep to 3 to render step 3 of signup page,
     * pass down this function to SignUpStep1 as the onClick function of the 'next' button on step2
     */
    handleCurrentStep3(){
        this.setState({currentStep: 3})
    }

    /**
     * sendPost for Filter button on browse page in Cars class,
     * pass down this function to update state variables of UserInputs class
     */
    sendPost (value) {
        let post = {}
        try{
        if (this.props.location.state.advanced == 'false') {
                const user = this.props.location.state

                post = {
                    "name": user.name,
                    "password": user.password,
                    "credit-score": user.creditScore,
                    "zip-code": user.zipCode,
                    "downpayment": user.maxDownPayment,
                    "monthlybudget": user.maxMonthlyPayment,
                    "car-preference": value
                }
            } else {
                const user = this.props.location.state
                post = {
                    "name": user.name,
                    "password": user.password,
                    "credit-score": user.creditScore,
                    "zip-code": user.zipCode,
                    "downpayment": user.maxDownPayment,
                    "monthlybudget": user.maxMonthlyPayment,
                    "car-preference": value,

                    "monthlydebt": user.monthlyDebt,
                    "monthlyincome": user.monthlyIncome,
                    "employed": user.employed,
                    "homeowner": user.homeowner
                }
            }
            console.log(JSON.stringify(post))

            const requestOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(post)
            };

            fetch("https://cors-everywhere.herokuapp.com/http://ec2-18-118-19-97.us-east-2.compute.amazonaws.com:8080/traderauto-plus", requestOptions)
                .then(response => response.json())
                .then(response => this.setState({postResponse: response}))

        } catch (e) {
            // if no location state saved
            this.setState({currentStep: -1})
        }
    }

    /**
     * handleInputChange function for detecting changes in dropdown boxes
     * pass down this function to update state variables of UserInputs class
     */
    handleInputChange(value, action){
        this.setState({ [action.name]:value.value})
        console.log(this.state)
        console.log(this.props.location.state)
    }

    /**
     * handleCarFilter function for detecting changes in dropdown box for car preference on browse page in CarFilter class
     * in this one sendPost called
     */
    handleCarFilter(value, action){
        this.setState({ [action.name]:value.value})
        console.log(this.state)
        this.sendPost(value.value)
    }

    /**
     * Check if input fields of sign up from on step 1 properly filled, if not alert pops up
     */
    stepOneNext(){
        if (this.state.name === '' || this.state.password === ''){
            alert('Please fill out inputs properly!')
        }else{
            this.setState({currentStep: 2})

        }
    }

    /**
     * Check if input fields of sign up from on step 2 properly filled, if not alert pops up
     */
    stepTwoNext(){
        if (this.state.maxDownPayment === '' || this.state.maxMonthlyPayment === '' || this.state.zipCode === '' || this.state.creditScore === ''){
            alert('Please fill out inputs properly! There exits missing input(s)!')
        }else{
            this.setState({currentStep: 3})
        }
    }

    render(){
        if(this.props.which){ // if true, return signup
            return(<SignUp
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
                    handleInputChange = {this.handleInputChange}

                    stepOneNext = {this.stepOneNext}
                    stepTwoNext = {this.stepTwoNext}
                />
            )

        } else { // if false, return browse
            console.log('test')
            console.log(this.state.postResponse)

            if(this.state.currentStep == -1){
                return(
                    <div>
                        <h1>Please sign in / sign up first!</h1>
                    </div>
                )
            }else{

                return(
                    <div>
                    <Cars
                    carColor = {this.state.carColor}
                    carType = {this.state.carType}
                    carBrand = {this.state.carBrand}
                    carAge = {this.state.carAge}
                    handleCarFilter = {this.handleCarFilter}
                    sendPost = {this.sendPost}
                    currentStep = {this.state.currentStep}

                    postResponse = {this.state.postResponse}

                    />
                    </div>
                )
            }
        }

    }

}
export default withRouter(UserInputs)
