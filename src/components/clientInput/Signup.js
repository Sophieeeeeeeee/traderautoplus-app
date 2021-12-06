import React from "react";
import '../../app/App.css';
import './UserInput.css';
import SignupStep1 from "./Signup_Step1";
import SignupStep2 from "./Signup_Step2";
import SignupStep3 from "./Signup_Step3";

/**
 * Renders Signup page, the form inputs, props all come from UserInputs class
 * @props  {String} name
 * @props  {String} maxDownPayment
 * @props  {String} maxMonthly Payment
 * @props  {String} zipCode
 * @props  {String} creditScore
 * @props  {function} handleSubmit display alert and saves user inputs to UserInputs state
 * @props  {function} handleChange box content updates based on what user types
 * @sendPost = {props.sendPost}
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
                        handleCarFilter = {props.handleCarFilter}/>
                </form>


            </div>
        </div>
    </div>
)
}

export default Signup