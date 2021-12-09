import React from "react";
import '../../app/App.css';
import './UserInput.css';
import SignupStep1 from "./Signup_Step1";
import SignupStep2 from "./Signup_Step2";
import SignupStep3 from "./Signup_Step3";

/**
 * Renders Signup page, props all come from UserInputs class
 * Renders which step depending on value of prop.currentStep
 * @props  {String} name
 * @props  {String} maxDownPayment
 * @props  {String} maxMonthly Payment
 * @props  {String} zipCode
 * @props  {String} creditScore
 * @props  {function} handleSubmit display alert and saves user inputs to UserInputs state
 * @props  {function} handleChange box content updates based on what user types
 * @props  {function} sendPost send user inputs as fetch request to backend and receive filtered cars
 * @props  {int} currentStep determines which Signstep to display
 * @props  {function} handleCurrentStep2 updates currentStep from UserInputs
 * @props  {function} handleCurrentStep3 updates currentStep from UserInputs
 *
 * @props  {boolean} advanced
 * @props  {String} monthlyIncome
 * @props  {String} monthlyDebt
 * @props  {boolean} employed
 * @props  {boolean} homeowner
 * @props  {function} handleInputChange updates state variables based on user inputs
 * @props  {function} stepOneNext triggered when next button on stepOne clicked
 * @props  {function} stepTwoNext triggered when next button on stepTwo clicked
 */
function Signup(props){

    return(
    <div>
        <div className='form-container'>
            <div className='form-content'>
                <form onSubmit={props.handleSubmit} className='form'>

                    <SignupStep1
                        currentStep={props.currentStep}
                        handleCurrentStep = {props.handleCurrentStep2}

                        name = {props.name}
                        password =  {props.password}
                        maxMonthlyPayment = {props.maxMonthlyPayment}
                        maxDownPayment = {props.maxDownPayment}
                        zipCode = {props.zipCode}
                        creditScore = {props.creditScore}
                        handleChange = {props.handleChange}
                        handleSubmit = {props.handleSubmit}
                        sendPost = {props.sendPost}
                        stepOneNext = {props.stepOneNext}/>

                    <SignupStep2
                        currentStep={props.currentStep}
                        handleCurrentStep = {props.handleCurrentStep3}

                        name = {props.name}
                        password =  {props.password}
                        maxMonthlyPayment = {props.maxMonthlyPayment}
                        maxDownPayment = {props.maxDownPayment}
                        zipCode = {props.zipCode}
                        creditScore = {props.creditScore}
                        handleChange = {props.handleChange}
                        handleSubmit = {props.handleSubmit}
                        sendPost = {props.sendPost}
                        stepTwoNext = {props.stepTwoNext}/>

                    <SignupStep3
                        currentStep={props.currentStep}

                        name = {props.name}
                        password =  {props.password}
                        maxMonthlyPayment = {props.maxMonthlyPayment}
                        maxDownPayment = {props.maxDownPayment}
                        zipCode = {props.zipCode}
                        creditScore = {props.creditScore}
                        handleChange = {props.handleChange}
                        handleSubmit = {props.handleSubmit}
                        sendPost = {props.sendPost}

                        monthlyIncome = {props.monthlyIncome}
                        monthlyDebt = {props.monthlyDebt}
                        employed = {props.employed}
                        homeowner = {props.homeowner}
                        handleInputChange = {props.handleInputChange}/>
                </form>


            </div>
        </div>
    </div>
)
}

export default Signup